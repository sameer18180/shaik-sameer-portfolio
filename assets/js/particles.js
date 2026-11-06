/**
 * SHAIK SAMEER — LUXURY DEVELOPER PORTFOLIO
 * Subtle Golden Stardust & Ambient Light Particle Engine
 * High efficiency HTML5 Canvas system with interactive depth
 */

(function () {
  'use strict';

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 75); // Scaled based on viewport

  // Gold color palette for particles
  const goldPalette = [
    'rgba(255, 246, 213, ', // Champagne glow
    'rgba(212, 175, 55, ',  // Metallic classic gold
    'rgba(230, 202, 101, ', // Radiant warm gold
    'rgba(184, 134, 11, ',  // Deep bronze gold
  ];

  let mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', function () {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', debounce(resize, 200));

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 1.8 + 0.6; // 0.6px to 2.4px
      this.speedY = Math.random() * 0.4 + 0.15; // Slow upward float
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.colorBase = goldPalette[Math.floor(Math.random() * goldPalette.length)];
      this.baseAlpha = Math.random() * 0.45 + 0.15; // 0.15 to 0.6
      this.alpha = this.baseAlpha;
      this.pulseSpeed = Math.random() * 0.02 + 0.008;
      this.pulseVal = Math.random() * Math.PI;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;

      // Twinkle effect
      this.pulseVal += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.pulseVal) * 0.15;

      // Mouse gentle interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          this.x -= dirX * force * 1.2;
          this.y -= dirY * force * 1.2;
        }
      }

      // Reset when particle goes above canvas or off-screen
      if (this.y < -10 || this.x < -20 || this.x > width + 20) {
        this.reset(false);
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + Math.max(0.05, Math.min(this.alpha, 0.75)) + ')';
      ctx.fill();

      // Soft glow for larger particles
      if (this.size > 1.4) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = this.colorBase + (this.alpha * 0.18) + ')';
        ctx.fill();
      }
    }
  }

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw subtle connection lines between very close particles (constellation effect)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 85) {
          const lineAlpha = (1 - dist / 85) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  // Start animation when page is visible
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animationFrameId = requestAnimationFrame(animate);
    }
  });

  animate();
})();
