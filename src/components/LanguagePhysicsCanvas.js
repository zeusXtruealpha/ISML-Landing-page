import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

const greetings = [
  { text: 'Hello', language: 'English', color: '#4A90E2' },
  { text: 'Hej', language: 'Danish', color: '#FF6B6B' },
  { text: '你好', language: 'Chinese', color: '#4ECDC4' },
  { text: 'こんにちは', language: 'Japanese', color: '#FFD93D' },
  { text: '안녕하세요', language: 'Korean', color: '#95E1D3' },
  { text: 'Bonjour', language: 'French', color: '#FF8B94' },
  { text: 'Hola', language: 'Spanish', color: '#6C5CE7' },
  { text: 'Ciao', language: 'Italian', color: '#A8E6CF' },
  { text: 'Guten Tag', language: 'German', color: '#FFB6B9' },
];

const DESKTOP_TILE_COUNT = 4; // tiles per greeting for desktop
const MOBILE_TILE_COUNT = 2; // tiles per greeting for mobile
const TILE_WIDTH = 110;
const TILE_HEIGHT = 60;
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
  const touchStartPos = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Responsive canvas size
  function getCanvasSize() {
    const width = Math.min(window.innerWidth * 0.95, 1100);
    const height = window.innerWidth <= 768 ? 300 : 400;
    return { width, height };
  }

  // Update canvas size on mount and resize
  useEffect(() => {
    const updateCanvasSize = () => {
      const size = getCanvasSize();
      setCanvasSize(size);
      if (canvasRef.current) {
        canvasRef.current.width = size.width;
        canvasRef.current.height = size.height;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowHeading(true), 100);
          setShouldStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Get tile count based on screen size
  const getTileCount = () => {
    return window.innerWidth <= 768 ? MOBILE_TILE_COUNT : DESKTOP_TILE_COUNT;
  };

  // Physics engine setup and animation
  useEffect(() => {
    if (!shouldStart || !canvasRef.current) return;

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } = Matter;
    const engine = Engine.create({ gravity: { x: 0, y: 0.9 } });
    engineRef.current = engine;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { width, height } = canvasSize;

    // Create walls with adjusted thickness for mobile
    const wallThickness = window.innerWidth <= 768 ? 40 : WALL_THICKNESS;
    const walls = [
      Bodies.rectangle(width/2, -wallThickness/2, width, wallThickness, { isStatic: true }), // top
      Bodies.rectangle(width/2, height + wallThickness/2, width, wallThickness, { isStatic: true }), // bottom
      Bodies.rectangle(-wallThickness/2, height/2, wallThickness, height, { isStatic: true }), // left
      Bodies.rectangle(width + wallThickness/2, height/2, wallThickness, height, { isStatic: true }) // right
    ];
    World.add(engine.world, walls);

    // Create boxes with adjusted size for mobile
    const boxWidth = window.innerWidth <= 768 ? TILE_WIDTH * 0.85 : TILE_WIDTH;
    const boxHeight = window.innerWidth <= 768 ? TILE_HEIGHT * 0.85 : TILE_HEIGHT;
    const boxes = [];
    boxesRef.current = boxes;

    // Get current tile count based on screen size
    const currentTileCount = getTileCount();

    greetings.forEach((greeting, i) => {
      for (let j = 0; j < currentTileCount; j++) {
        const x = Math.random() * (width - boxWidth) + boxWidth/2;
        const y = Math.random() * (height - boxHeight) + boxHeight/2;
        const box = Bodies.rectangle(x, y, boxWidth, boxHeight, {
          restitution: 0.6,
          friction: 0.1,
          density: 0.001,
          render: { fillStyle: greeting.color }
        });
        box.greeting = greeting;
        boxes.push(box);
      }
    });
    World.add(engine.world, boxes);

    // Mouse control
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    mouseConstraintRef.current = mouseConstraint;
    World.add(engine.world, mouseConstraint);

    // Touch event handlers
    const handleTouchStart = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      touchStartPos.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
      isDragging.current = true;
      mouse.position = touchStartPos.current;
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouse.position = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      isDragging.current = false;
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Animation loop
    let frameId;
    function renderLoop() {
      Matter.Engine.update(engine, 1000 / 60);
      ctx.clearRect(0, 0, width, height);
      
      boxes.forEach(box => {
        const { greeting } = box;
        ctx.save();
        ctx.translate(box.position.x, box.position.y);
        ctx.rotate(box.angle);
        
        // Draw box background
        ctx.fillStyle = greeting.color;
        ctx.fillRect(-boxWidth/2, -boxHeight/2, boxWidth, boxHeight);
        
        // Draw text
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 1.2rem Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(greeting.text, 0, -5);
        
        // Draw language name
        ctx.font = '0.8rem Arial';
        ctx.fillText(greeting.language, 0, 15);
        
        ctx.restore();
      });
      frameId = requestAnimationFrame(renderLoop);
    }
    renderLoop();

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      Matter.Engine.clear(engine);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [shouldStart, canvasSize]);

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem', background: '#FFFFFF', borderRadius: 8, boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
      <h2 className={`languages-title animate-title${showHeading ? ' show' : ''}`} style={{ textAlign: 'center', color: '#1A237E', marginBottom: '1.5rem', fontSize: '2rem' }}>Play With Languages</h2>
      <div style={{ width: '100%' }}>
        <canvas 
          ref={canvasRef} 
          style={{ 
            width: '100%', 
            height: canvasSize.height, 
            background: '#FFFFFF', 
            borderRadius: 8, 
            display: 'block',
            touchAction: 'none'
          }} 
        />
      </div>
    </div>
  );
}

export default LanguagePhysicsCanvas; 