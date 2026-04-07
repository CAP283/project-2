
Features Included:
✨ 1. Scroll Reveal Animations
🔍 2. Image Lightbox/Zoom Modal
⬆️ 3. Smooth Scroll & Back-to-Top
🌊 4. Parallax Scrolling Effect
💫 5. Interactive 3D Card Hover Effects
⌨️ 6. Typing Animation
📊 7. Loading Progress Bar
🔢 8. Animated Counters
✨ 9. Particles Background
🌓 10. Theme Toggle (Dark/Light Mode)
🖼️ 11. Lazy Load Fade-in
📏 12. Scroll Progress Indicator

Author: E1 Agent
Version: 1.0.0
*/

// ============================================================================
// 🎯 CONFIGURATION
// ============================================================================

const CONFIG = {
  // Scroll Reveal
  revealDelay: 100,
  revealDuration: 800,
  revealDistance: '50px',
  
  // Typing Animation
  typingSpeed: 100,
  typingDelay: 500,
  
  // Parallax
  parallaxSpeed: 0.5,
  
  // Back to Top
  backToTopThreshold: 300,
  
  // Smooth Scroll
  smoothScrollDuration: 800,
  
  // Particles
  particlesEnabled: true,
  particlesColor: '#00ff00', // Kawasaki Green
  
  // Counter Animation
  counterDuration: 2000,
  
  // Theme
  defaultTheme: 'light'
};

// ============================================================================
// 📊 1. LOADING PROGRESS BAR
// ============================================================================

class LoadingProgressBar {
  constructor() {
    this.createProgressBar();
    this.init();
  }

  createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'loading-progress';
    progressBar.innerHTML = '<div class=\"progress-bar-fill\"></div>';
    document.body.insertBefore(progressBar, document.body.firstChild);
  }

  init() {
    let progress = 0;
    const fill = document.querySelector('.progress-bar-fill');
    
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          document.getElementById('loading-progress').style.opacity = '0';
          setTimeout(() => {
            document.getElementById('loading-progress').remove();
          }, 500);
        }, 200);
      }
      fill.style.width = progress + '%';
    }, 100);

    window.addEventListener('load', () => {
      progress = 100;
      fill.style.width = '100%';
    });
  }
}

// ============================================================================
// 📏 2. SCROLL PROGRESS INDICATOR
// ============================================================================

class ScrollProgressIndicator {
  constructor() {
    this.createIndicator();
    this.init();
  }

  createIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'scroll-progress';
    indicator.innerHTML = '<div class=\"scroll-progress-fill\"></div>';
    document.body.insertBefore(indicator, document.body.firstChild);
  }

  init() {
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      document.querySelector('.scroll-progress-fill').style.width = scrolled + '%';
    });
  }
}

// ============================================================================
// ⌨️ 3. TYPING ANIMATION
// ============================================================================

class TypingAnimation {
  constructor(element, text, speed = CONFIG.typingSpeed) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.currentIndex = 0;
  }

  async start() {
    this.element.textContent = '';
    this.element.style.borderRight = '2px solid #00ff00';
    this.element.style.paddingRight = '5px';
    
    for (let i = 0; i < this.text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, this.speed));
      this.element.textContent += this.text[i];
    }
    
    // Blinking cursor effect
    setInterval(() => {
      this.element.style.borderRight = 
        this.element.style.borderRight === '2px solid transparent' 
          ? '2px solid #00ff00' 
          : '2px solid transparent';
    }, 500);
  }
}

// ============================================================================
// ✨ 4. SCROLL REVEAL ANIMATIONS
// ============================================================================

class ScrollReveal {
  constructor() {
    this.reveals = document.querySelectorAll('.reveal');
    this.init();
  }

  init() {
    // Remove initial 'active' class from all reveals
    this.reveals.forEach(element => {
      element.classList.remove('active');
    });

    this.observeElements();
    // Trigger initial check
    this.checkVisibility();
  }

  observeElements() {
    const options = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, CONFIG.revealDelay);
        }
      });
    }, options);

    this.reveals.forEach(element => observer.observe(element));
  }

  checkVisibility() {
    this.reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('active');
      }
    });
  }
}

// ============================================================================
// 🔍 5. IMAGE LIGHTBOX / ZOOM MODAL
// ============================================================================

class ImageLightbox {
  constructor() {
    this.createModal();
    this.init();
    this.currentIndex = 0;
    this.images = [];
  }

  createModal() {
    const modal = document.createElement('div');
    modal.id = 'image-lightbox';
    modal.innerHTML = `
      <div class=\"lightbox-overlay\"></div>
      <div class=\"lightbox-content\">
        <button class=\"lightbox-close\" aria-label=\"Close lightbox\">&times;</button>
        <button class=\"lightbox-prev\" aria-label=\"Previous image\">‹</button>
        <button class=\"lightbox-next\" aria-label=\"Next image\">›</button>
        <img src=\"\" alt=\"\" class=\"lightbox-image\">
        <div class=\"lightbox-caption\"></div>
        <div class=\"lightbox-counter\"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  init() {
    // Collect all clickable images
    this.images = Array.from(document.querySelectorAll('.neon-photo, .media img'));
    
    this.images.forEach((img, index) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', (e) => {
        e.preventDefault();
        this.open(index);
      });
    });

    // Event listeners
    document.querySelector('.lightbox-close').addEventListener('click', () => this.close());
    document.querySelector('.lightbox-overlay').addEventListener('click', () => this.close());
    document.querySelector('.lightbox-prev').addEventListener('click', () => this.navigate(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => this.navigate(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!document.getElementById('image-lightbox').classList.contains('active')) return;
      
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.navigate(-1);
      if (e.key === 'ArrowRight') this.navigate(1);
    });
  }

  open(index) {
    this.currentIndex = index;
    const modal = document.getElementById('image-lightbox');
    const img = this.images[index];
    
    modal.querySelector('.lightbox-image').src = img.src;
    modal.querySelector('.lightbox-image').alt = img.alt;
    
    // Get caption
    const figure = img.closest('figure');
    const caption = figure ? figure.querySelector('figcaption')?.textContent : img.alt;
    modal.querySelector('.lightbox-caption').textContent = caption || '';
    
    // Update counter
    modal.querySelector('.lightbox-counter').textContent = 
      `${index + 1} / ${this.images.length}`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    document.getElementById('image-lightbox').classList.remove('active');
    document.body.style.overflow = '';
  }

  navigate(direction) {
    this.currentIndex += direction;
    
    if (this.currentIndex < 0) this.currentIndex = this.images.length - 1;
    if (this.currentIndex >= this.images.length) this.currentIndex = 0;
    
    this.open(this.currentIndex);
  }
}

// ============================================================================
// ⬆️ 6. SMOOTH SCROLL & BACK TO TOP
// ============================================================================

class SmoothScroll {
  constructor() {
    this.init();
    this.initBackToTop();
  }

  init() {
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > CONFIG.backToTopThreshold) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ============================================================================
// 🌊 7. PARALLAX SCROLLING
// ============================================================================

class ParallaxEffect {
  constructor() {
    this.elements = document.querySelectorAll('.banner img, .hero');
    this.init();
  }

  init() {
    if (this.elements.length === 0) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      
      this.elements.forEach(element => {
        const speed = element.dataset.parallaxSpeed || CONFIG.parallaxSpeed;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
}

// ============================================================================
// 💫 8. 3D CARD HOVER EFFECTS
// ============================================================================

class Card3DEffect {
  constructor() {
    this.cards = document.querySelectorAll('.card, figure');
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
      });

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale3d(1.05, 1.05, 1.05)
        `;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease';
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }
}

// ============================================================================
// 🔢 9. ANIMATED COUNTERS
// ============================================================================

class AnimatedCounter {
  constructor() {
    this.counters = document.querySelectorAll('.price-tag');
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          this.animateCounter(entry.target);
          entry.target.dataset.counted = 'true';
        }
      });
    }, { threshold: 0.5 });

    this.counters.forEach(counter => observer.observe(counter));
  }

  animateCounter(element) {
    const text = element.textContent;
    const match = text.match(/\$?([\d,]+)/);
    
    if (!match) return;
    
    const target = parseInt(match[1].replace(/,/g, ''));
    const duration = CONFIG.counterDuration;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      const formatted = '$' + Math.floor(current).toLocaleString();
      element.innerHTML = formatted + ' <small>approx</small>';
    }, 16);
  }
}

// ============================================================================
// 🌓 10. THEME TOGGLE (DARK/LIGHT MODE)
// ============================================================================

class ThemeToggle {
  constructor() {
    this.createToggle();
    this.init();
  }

  createToggle() {
    const toggle = document.createElement('button');
    toggle.id = 'theme-toggle';
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle dark/light theme');
    toggle.innerHTML = `
      <span class=\"theme-icon sun\">☀️</span>
      <span class=\"theme-icon moon\">🌙</span>
    `;
    document.body.appendChild(toggle);
  }

  init() {
    const savedTheme = localStorage.getItem('theme') || CONFIG.defaultTheme;
    this.setTheme(savedTheme);

    document.getElementById('theme-toggle').addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.classList.toggle('dark', theme === 'dark');
    }
  }
}

// ============================================================================
// 🖼️ 11. LAZY LOAD FADE-IN
// ============================================================================

class LazyLoadFadeIn {
  constructor() {
    this.images = document.querySelectorAll('img[loading=\"lazy\"]');
    this.init();
  }

  init() {
    this.images.forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease-in-out';
      
      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.addEventListener('load', () => {
          img.style.opacity = '1';
        });
      }
    });
  }
}

// ============================================================================
// ✨ 12. PARTICLES BACKGROUND
// ============================================================================

class ParticlesBackground {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.particleCount = 50;
    this.init();
  }

  init() {
    if (!CONFIG.particlesEnabled) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particles-canvas';
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '0';

    hero.style.position = 'relative';
    hero.insertBefore(this.canvas, hero.firstChild);

    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();

    this.createParticles();
    this.animate();

    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    const hero = document.querySelector('.hero');
    this.canvas.width = hero.offsetWidth;
    this.canvas.height = hero.offsetHeight;
  }

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = CONFIG.particlesColor;
      this.ctx.globalAlpha = 0.5;
      this.ctx.fill();
    });

    // Draw connections
    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = CONFIG.particlesColor;
          this.ctx.globalAlpha = (100 - distance) / 100 * 0.3;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      });
    });

    this.ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

// ============================================================================
// 🎬 13. NEON GLOW EFFECT ON HOVER
// ============================================================================

class NeonGlowEffect {
  constructor() {
    this.images = document.querySelectorAll('.neon-photo');
    this.init();
  }

  init() {
    this.images.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.style.filter = 'drop-shadow(0 0 20px #00ff00) brightness(1.1)';
        img.style.transform = 'scale(1.05)';
      });

      img.addEventListener('mouseleave', () => {
        img.style.filter = '';
        img.style.transform = 'scale(1)';
      });
    });
  }
}

// ============================================================================
// 🎯 MAIN INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('🏍️ Kawasaki Bikes - Initializing enhancements...');

  // Initialize all features
  new LoadingProgressBar();
  new ScrollProgressIndicator();
  new ScrollReveal();
  new ImageLightbox();
  new SmoothScroll();
  new ParallaxEffect();
  new Card3DEffect();
  new AnimatedCounter();
  new ThemeToggle();
  new LazyLoadFadeIn();
  new ParticlesBackground();
  new NeonGlowEffect();

  // Typing animation for hero heading
  setTimeout(() => {
    const heroHeading = document.querySelector('.hero h1');
    if (heroHeading) {
      const originalText = heroHeading.textContent;
      const typingAnimation = new TypingAnimation(heroHeading, originalText);
      typingAnimation.start();
    }
  }, CONFIG.typingDelay);

  console.log('✅ All enhancements loaded successfully!');
});

// ============================================================================
// 🎨 CURSOR TRAIL EFFECT (BONUS!)
// ============================================================================

class CursorTrail {
  constructor() {
    this.coords = [];
    this.init();
  }

  init() {
    document.addEventListener('mousemove', (e) => {
      this.coords.push({ x: e.clientX, y: e.clientY });
      
      if (this.coords.length > 20) {
        this.coords.shift();
      }
      
      this.drawTrail();
    });
  }

  drawTrail() {
    // Remove old trail elements
    document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
    
    this.coords.forEach((coord, index) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = coord.x + 'px';
      trail.style.top = coord.y + 'px';
      trail.style.opacity = index / this.coords.length;
      trail.style.transform = `scale(${index / this.coords.length})`;
      document.body.appendChild(trail);
      
      setTimeout(() => trail.remove(), 500);
    });
  }
}

// Optional: Uncomment to enable cursor trail
// new CursorTrail();
"
Observation: Create successful: /app/kawasaki-enhancements.js
