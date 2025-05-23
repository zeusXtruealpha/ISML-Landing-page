import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const greetings = [
  { text: 'Hello', language: 'English', color: '#4A90E2' },
  { text: 'नमस्ते', language: 'Hindi', color: '#FF6B6B' },
  { text: '你好', language: 'Chinese', color: '#4ECDC4' },
  { text: 'こんにちは', language: 'Japanese', color: '#FFD93D' },
  { text: '안녕하세요', language: 'Korean', color: '#95E1D3' },
  { text: 'Bonjour', language: 'French', color: '#FF8B94' },
  { text: 'Hola', language: 'Spanish', color: '#6C5CE7' },
  { text: 'Ciao', language: 'Italian', color: '#A8E6CF' },
  { text: 'Guten Tag', language: 'German', color: '#FFB6B9' },
  { text: 'Здравствуйте', language: 'Russian', color: '#B8F2E6' }
];

const TILE_COUNT = 4; // tiles per greeting
const TILE_WIDTH = 90;
const TILE_HEIGHT = 48;
const WALL_THICKNESS = 60;

function LanguagePhysicsCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const boxesRef = useRef([]);
  const resizeTimeout = useRef(null);
  const [shouldStart, setShouldStart] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const mouseConstraintRef = useRef(null);

  // Responsive canvas size
  function getCanvasSize() {
    const width = Math.min(window.innerWidth * 0.95, 1100);
    const height = 400;
    return { width, height };
  }

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowHeading(true), 100);
          setShouldStart(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldStart) return;
    const { width, height } = getCanvasSize();
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Matter.js setup
    const engine = Matter.Engine.create();
    engine.gravity.y = 0.9;
    engineRef.current = engine;

    // Walls
    const walls = [
      Matter.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width, WALL_THICKNESS, { isStatic: true }), // bottom
      Matter.Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height, { isStatic: true }), // left
      Matter.Bodies.rectangle(width + WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height, { isStatic: true }), // right
    ];

    // Tiles
    const boxes = [];
    for (let i = 0; i < greetings.length; i++) {
      for (let j = 0; j < TILE_COUNT; j++) {
        const x = Math.random() * (width - TILE_WIDTH) + TILE_WIDTH / 2;
        const y = Math.random() * 40 - 60;
        const angle = (Math.random() - 0.5) * 0.7;
        const box = Matter.Bodies.rectangle(x, y, TILE_WIDTH, TILE_HEIGHT, {
          render: { fillStyle: greetings[i].color, opacity: 0 },
          chamfer: { radius: 10 },
          restitution: 0.7,
          friction: 0.08,
          frictionAir: 0.01,
          angle,
        });
        box.greeting = greetings[i];
        boxes.push(box);
      }
    }
    boxesRef.current = boxes;

    // Mouse drag (desktop and smart touch)
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    mouseConstraintRef.current = mouseConstraint;
    Matter.World.add(engine.world, [...walls, ...boxes, mouseConstraint]);

    // Smart touch handling
    let touchStartY = null;
    let touchStartX = null;
    let touchStartedOnTile = false;
    function isTouchOnTile(touch) {
      const rect = canvas.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * canvas.width;
      const y = ((touch.clientY - rect.top) / rect.height) * canvas.height;
      // Check if touch is inside any tile
      for (const box of boxes) {
        const dx = x - box.position.x;
        const dy = y - box.position.y;
        // Rotate point by -box.angle
        const cos = Math.cos(-box.angle);
        const sin = Math.sin(-box.angle);
        const localX = dx * cos - dy * sin;
        const localY = dx * sin + dy * cos;
        if (
          localX > -TILE_WIDTH / 2 &&
          localX < TILE_WIDTH / 2 &&
          localY > -TILE_HEIGHT / 2 &&
          localY < TILE_HEIGHT / 2
        ) {
          return true;
        }
      }
      return false;
    }
    function handleTouchStart(e) {
      if (e.touches.length !== 1) return;
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchStartedOnTile = isTouchOnTile(e.touches[0]);
      // Only preventDefault if started on a tile
      if (touchStartedOnTile) {
        e.preventDefault();
      }
    }
    function handleTouchMove(e) {
      if (e.touches.length !== 1) return;
      if (!touchStartedOnTile) return; // allow scroll
      const dy = Math.abs(e.touches[0].clientY - touchStartY);
      const dx = Math.abs(e.touches[0].clientX - touchStartX);
      // If mostly vertical, allow scroll
      if (dy > dx) {
        touchStartedOnTile = false;
        return;
      }
      // If mostly horizontal, prevent scroll and allow drag
      e.preventDefault();
    }
    function handleTouchEnd() {
      touchStartedOnTile = false;
    }
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);

    // Animation loop
    let frameId;
    function renderLoop() {
      Matter.Engine.update(engine, 1000 / 60);
      ctx.clearRect(0, 0, width, height);
      // Draw all tiles
      for (const box of boxes) {
        const { x, y } = box.position;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(box.angle);
        // Draw rounded rectangle
        ctx.fillStyle = box.greeting.color;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const w = TILE_WIDTH, h = TILE_HEIGHT, r = 10;
        ctx.moveTo(-w/2 + r, -h/2);
        ctx.lineTo(w/2 - r, -h/2);
        ctx.quadraticCurveTo(w/2, -h/2, w/2, -h/2 + r);
        ctx.lineTo(w/2, h/2 - r);
        ctx.quadraticCurveTo(w/2, h/2, w/2 - r, h/2);
        ctx.lineTo(-w/2 + r, h/2);
        ctx.quadraticCurveTo(-w/2, h/2, -w/2, h/2 - r);
        ctx.lineTo(-w/2, -h/2 + r);
        ctx.quadraticCurveTo(-w/2, -h/2, -w/2 + r, -h/2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Draw text
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 15px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(box.greeting.text, 0, -6);
        ctx.font = '12px Arial';
        ctx.fillText(box.greeting.language, 0, 13);
        ctx.restore();
      }
      frameId = requestAnimationFrame(renderLoop);
    }
    renderLoop();

    // Responsive resize
    function handleResize() {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        // Cleanup and re-init
        cancelAnimationFrame(frameId);
        Matter.Engine.clear(engine);
        if (canvas) {
          canvas.width = getCanvasSize().width;
          canvas.height = getCanvasSize().height;
        }
      }, 200);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      Matter.Engine.clear(engine);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [shouldStart]);

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem', background: '#FFFFFF', borderRadius: 8, boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
      <h2 className={`languages-title animate-title${showHeading ? ' show' : ''}`} style={{ textAlign: 'center', color: '#1A237E', marginBottom: '1.5rem', fontSize: '2rem' }}>Play With Languages</h2>
      <div style={{ width: '100%' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: 400, background: '#FFFFFF', borderRadius: 8, display: 'block', touchAction: 'pan-y' }} />
      </div>
    </div>
  );
}

export default LanguagePhysicsCanvas; 