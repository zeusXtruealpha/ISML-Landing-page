import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './LanguagePhysics.css';

const LanguagePhysics = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);

  useEffect(() => {
    const greetings = [
      { text: 'Hello', language: 'English', color: '#4A90E2' },
      { text: 'నమస్తే', language: 'Telugu', color: '#FF6B6B' },
      { text: '你好', language: 'Chinese', color: '#4ECDC4' },
      { text: 'こんにちは', language: 'Japanese', color: '#FFD93D' },
      { text: '안녕하세요', language: 'Korean', color: '#41E1D3' },
      { text: 'Bonjour', language: 'French', color: '#FF8B94' },
      { text: 'Hola', language: 'Spanish', color: '#6C5CE7' },
      { text: 'Ciao', language: 'Italian', color: '#A8E6CF' },
      { text: 'Guten Tag', language: 'German', color: '#FFB6B9' },
      { text: 'Здравствуйте', language: 'Russian', color: '#B8F2E6' }
    ];

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } = Matter;

    const engine = Engine.create({ gravity: { x: 0, y: 0.9 } });
    engineRef.current = engine;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: 400,
        wireframes: false,
        background: '#f8f9fa',
        showAngleIndicator: false,
      },
    });
    renderRef.current = render;

    // Add debug border to canvas
    setTimeout(() => {
      if (render.canvas) {
        render.canvas.style.border = '2px solid red';
      }
    }, 100);

    // Create walls
    const wallThickness = 60;
    const width = render.options.width;
    const height = render.options.height;
    const walls = [
      Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }), // bottom
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // left
      Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // right
    ];

    // Create many small greeting tiles
    const boxWidth = 90;
    const boxHeight = 48;
    const tilesPerGreeting = 4;
    const boxes = [];
    greetings.forEach((greeting) => {
      for (let i = 0; i < tilesPerGreeting; i++) {
        const x = Math.random() * (width - boxWidth) + boxWidth / 2;
        // Start just above the visible area
        const y = -Math.random() * 60 - boxHeight;
        const angle = (Math.random() - 0.5) * 0.7;
        const box = Bodies.rectangle(
          x,
          y,
          boxWidth,
          boxHeight,
          {
            render: {
              fillStyle: greeting.color,
              strokeStyle: '#ffffff',
              lineWidth: 2,
              opacity: 0 // Hide default rectangle, we draw our own
            },
            chamfer: { radius: 10 },
            restitution: 0.7,
            friction: 0.08,
            frictionAir: 0.01,
            angle: angle
          }
        );
        box.greeting = greeting;
        boxes.push(box);
      }
    });

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(engine.world, [...walls, ...boxes, mouseConstraint]);

    Engine.run(engine);
    Render.run(render);

    // Draw greetings after rendering bodies
    Events.on(render, 'afterRender', () => {
      const ctx = render.context;
      boxes.forEach((box) => {
        const { x, y } = box.position;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(box.angle);
        // Draw rounded rectangle overlay for better text contrast
        ctx.fillStyle = box.greeting.color;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const w = boxWidth, h = boxHeight, r = 10;
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
        // Draw greeting text
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 15px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(box.greeting.text, 0, -6);
        ctx.font = '12px Arial';
        ctx.fillText(box.greeting.language, 0, 13);
        ctx.restore();
      });
      // Debug: log the first tile's position
      if (boxes.length > 0) {
        // Only log every 10th frame to avoid spamming
        if (!window._matterFrame) window._matterFrame = 0;
        window._matterFrame++;
        if (window._matterFrame % 10 === 0) {
          console.log('First tile position:', boxes[0].position);
        }
      }
    });

    // Handle window resize
    const handleResize = () => {
      render.options.width = sceneRef.current.clientWidth;
      render.canvas.width = render.options.width;
      render.canvas.height = render.options.height;
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <div className="language-physics-container">
      <h2>Play With Languages</h2>
      <div ref={sceneRef} className="physics-scene"></div>
    </div>
  );
};

export default LanguagePhysics; 