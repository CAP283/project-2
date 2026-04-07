Perfect! I'll create **ONE single file** that you can just paste into GitHub. It will include everything (CSS + JavaScript) in one file! 🚀
Action: file_editor create /app/enhancements.js --file-text "/*
╔══════════════════════════════════════════════════════════════════════════════╗
║           KAWASAKI BIKES - ALL-IN-ONE ENHANCEMENT SCRIPT                     ║
║              Just paste this file and link it in your HTML!                  ║
╚══════════════════════════════════════════════════════════════════════════════╝

✨ 14+ Premium Features Included
📦 Everything in one file (CSS + JavaScript)
🚀 Just link this file in your HTML

INSTALLATION:
1. Create file \"enhancements.js\" in your GitHub repo
2. Paste this entire code
3. Add to ALL your HTML files before </body>:
   <script src=\"enhancements.js\"></script>
4. Push to GitHub and enjoy!

*/

// ============================================================================
// 🎨 AUTO-INJECT CSS STYLES
// ============================================================================

(function injectStyles() {
  const styles = `
    /* Loading Progress Bar */
    #loading-progress{position:fixed;top:0;left:0;width:100%;height:4px;background:rgba(0,0,0,0.1);z-index:999999;transition:opacity 0.5s}
    .progress-bar-fill{height:100%;background:linear-gradient(90deg,#00ff00,#00cc00,#00ff00);background-size:200% 100%;animation:shimmer 1.5s infinite;transition:width 0.3s;box-shadow:0 0 10px #00ff00}
    @keyframes shimmer{0%{background-position:-100% 0}100%{background-position:100% 0}}
    
    /* Scroll Progress Indicator */
    #scroll-progress{position:fixed;top:0;left:0;width:100%;height:3px;background:rgba(0,0,0,0.05);z-index:999998;pointer-events:none}
    .scroll-progress-fill{height:100%;background:linear-gradient(90deg,#00ff00,#00dd00);width:0%;transition:width 0.1s;box-shadow:0 0 15px #00ff00}
    
    /* Scroll Reveal Animations */
    .reveal{opacity:0;transform:translateY(50px);transition:all 0.8s cubic-bezier(0.4,0,0.2,1)}
    .reveal.active{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-50px)}
    .reveal-left.active{opacity:1;transform:translateX(0)}
    .reveal-right{opacity:0;transform:translateX(50px)}
    .reveal-right.active{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(0.8)}
    .reveal-scale.active{opacity:1;transform:scale(1)}
    
    /* Image Lightbox */
    #image-lightbox{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.3s}
    #image-lightbox.active{opacity:1;pointer-events:all}
    .lightbox-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);backdrop-filter:blur(10px)}
    .lightbox-content{position:relative;max-width:90%;max-height:90%;z-index:100000;animation:lightboxZoomIn 0.4s cubic-bezier(0.4,0,0.2,1)}
    @keyframes lightboxZoomIn{from{transform:scale(0.8);opacity:0}to{transform:scale(1);opacity:1}}
    .lightbox-image{max-width:100%;max-height:80vh;object-fit:contain;border-radius:8px;box-shadow:0 20px 60px rgba(0,255,0,0.3)}
    .lightbox-close{position:absolute;top:-50px;right:0;background:transparent;border:none;color:white;font-size:40px;cursor:pointer;width:50px;height:50px;display:flex;align-items:center;justify-content:center;transition:transform 0.2s,color 0.2s;font-weight:300}
    .lightbox-close:hover{transform:rotate(90deg);color:#00ff00}
    .lightbox-prev,.lightbox-next{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:2px solid rgba(255,255,255,0.2);color:white;font-size:40px;cursor:pointer;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all 0.3s}
    .lightbox-prev{left:-80px}
    .lightbox-next{right:-80px}
    .lightbox-prev:hover,.lightbox-next:hover{background:#00ff00;color:black;transform:translateY(-50%) scale(1.1);border-color:#00ff00;box-shadow:0 0 20px #00ff00}
    .lightbox-caption{margin-top:15px;color:white;text-align:center;font-size:14px;max-width:600px;line-height:1.5}
    .lightbox-counter{position:absolute;top:-50px;left:0;color:white;font-size:16px;font-weight:bold;background:rgba(0,255,0,0.2);padding:8px 16px;border-radius:20px;backdrop-filter:blur(10px)}
    @media (max-width:768px){.lightbox-prev{left:10px}.lightbox-next{right:10px}.lightbox-close{top:10px;right:10px}.lightbox-counter{top:10px;left:10px}}
    
    /* Back to Top Button */
    .back-to-top{position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:linear-gradient(135deg,#00ff00,#00cc00);color:black;border:none;border-radius:50%;font-size:24px;cursor:pointer;box-shadow:0 4px 15px rgba(0,255,0,0.3);z-index:9999;opacity:0;transform:translateY(100px);transition:all 0.3s cubic-bezier(0.4,0,0.2,1);pointer-events:none}
    .back-to-top.visible{opacity:1;transform:translateY(0);pointer-events:all}
    .back-to-top:hover{transform:translateY(-5px);box-shadow:0 8px 25px rgba(0,255,0,0.5);background:linear-gradient(135deg,#00ff00,#00ff00)}
    .back-to-top:active{transform:translateY(-2px)}
    
    /* 3D Card Hover */
    .card,figure{transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);transform-style:preserve-3d}
    .card:hover,figure:hover{z-index:10}
    
    /* Theme Toggle */
    .theme-toggle{position:fixed;top:20px;right:20px;width:60px;height:60px;border-radius:50%;border:2px solid #ddd;background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:24px;transition:all 0.3s;z-index:9998;box-shadow:0 4px 15px rgba(0,0,0,0.1)}
    .theme-toggle:hover{transform:scale(1.1) rotate(20deg);box-shadow:0 6px 20px rgba(0,0,0,0.15)}
    .theme-icon{position:absolute;transition:all 0.3s}
    .theme-icon.sun{opacity:1;transform:scale(1) rotate(0deg)}
    .theme-icon.moon{opacity:0;transform:scale(0) rotate(-180deg)}
    .theme-toggle.dark .theme-icon.sun{opacity:0;transform:scale(0) rotate(180deg)}
    .theme-toggle.dark .theme-icon.moon{opacity:1;transform:scale(1) rotate(0deg)}
    .theme-toggle.dark{background:#1a1a1a;border-color:#444}
    
    /* Dark Theme */
    [data-theme=\"dark\"]{background:#0a0a0a;color:#e0e0e0}
    [data-theme=\"dark\"] body{background:#0a0a0a;color:#e0e0e0}
    [data-theme=\"dark\"] .hero,[data-theme=\"dark\"] .card{background:#1a1a1a;color:#e0e0e0}
    [data-theme=\"dark\"] .card{border-color:#333}
    [data-theme=\"dark\"] .btn{background:#2a2a2a;color:#e0e0e0;border-color:#444}
    [data-theme=\"dark\"] .btn.primary{background:linear-gradient(135deg,#00ff00,#00cc00);color:black}
    [data-theme=\"dark\"] .price-tag{background:rgba(0,255,0,0.9);color:black}
    [data-theme=\"dark\"] a{color:#00ff00}
    [data-theme=\"dark\"] .muted{color:#888}
    
    /* Neon Photo Effects */
    .neon-photo{transition:all 0.3s cubic-bezier(0.4,0,0.2,1)}
    img{transition:opacity 0.5s}
    
    /* Cursor Trail */
    .cursor-trail{position:fixed;width:10px;height:10px;border-radius:50%;background:#00ff00;pointer-events:none;z-index:999999;mix-blend-mode:screen;transition:opacity 0.5s,transform 0.5s}
    
    /* Price Tag Animations */
    .price-tag{transition:all 0.3s;display:inline-block}
    figure:hover .price-tag{transform:scale(1.1);box-shadow:0 4px 15px rgba(0,255,0,0.4)}
    
    /* Particles Canvas */
    #particles-canvas{opacity:0.6}
    [data-theme=\"dark\"] #particles-canvas{opacity:0.8}
    
    /* Smooth Scrolling */
    html{scroll-behavior:smooth}
    
    /* Performance */
    .reveal,.card,figure,.neon-photo,.lightbox-content{will-change:transform}
    
    /* Focus States */
    button:focus,a:focus{outline:2px solid #00ff00;outline-offset:4px}
    
    /* Responsive */
    @media (max-width:768px){
      .theme-toggle{width:50px;height:50px;top:15px;right:15px;font-size:20px}
      .back-to-top{width:45px;height:45px;bottom:20px;right:20px;font-size:20px}
      #loading-progress,#scroll-progress{height:3px}
    }
    
    /* Reduced Motion */
    @media (prefers-reduced-motion:reduce){
      *,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
})();

// ============================================================================
// 🎯 CONFIGURATION
// ============================================================================

const CONFIG = {
  typingSpeed: 100,
  typingDelay: 500,
  parallaxSpeed: 0.5,
  backToTopThreshold: 300,
  particlesEnabled: true,
  particlesColor: '#00ff00',
  counterDuration: 2000,
  defaultTheme: 'light'
};

// ============================================================================
// 📊 LOADING PROGRESS BAR
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
// 📏 SCROLL PROGRESS INDICATOR
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
// ⌨️ TYPING ANIMATION
// ============================================================================

class TypingAnimation {
  constructor(element, text, speed = CONFIG.typingSpeed) {
    this.element = element;
    this.text = text;
    this.speed = speed;
  }

  async start() {
    this.element.textContent = '';
    this.element.style.borderRight = '2px solid #00ff00';
    this.element.style.paddingRight = '5px';
    
    for (let i = 0; i < this.text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, this.speed));
      this.element.textContent += this.text[i];
    }
    
    setInterval(() => {
      this.element.style.borderRight = 
        this.element.style.borderRight === '2px solid transparent' 
          ? '2px solid #00ff00' 
          : '2px solid transparent';
    }, 500);
  }
}

// ============================================================================
// ✨ SCROLL REVEAL ANIMATIONS
// ============================================================================

class ScrollReveal {
  constructor() {
    this.reveals = document.querySelectorAll('.reveal');
    this.init();
  }

  init() {
    this.reveals.forEach(element => {
      element.classList.remove('active');
    });

    this.observeElements();
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
          }, 100);
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
// 🔍 IMAGE LIGHTBOX
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
    this.images = Array.from(document.querySelectorAll('.neon-photo, .media img'));
    
    this.images.forEach((img, index) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', (e) => {
        e.preventDefault();
        this.open(index);
      });
    });

    document.querySelector('.lightbox-close').addEventListener('click', () => this.close());
    document.querySelector('.lightbox-overlay').addEventListener('click', () => this.close());
    document.querySelector('.lightbox-prev').addEventListener('click', () => this.navigate(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => this.navigate(1));
    
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
    
    const figure = img.closest('figure');
    const caption = figure ? figure.querySelector('figcaption')?.textContent : img.alt;
    modal.querySelector('.lightbox-caption').textContent = caption || '';
    
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
// ⬆️ SMOOTH SCROLL & BACK TO TOP
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
// 🌊 PARALLAX SCROLLING
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
// 💫 3D CARD HOVER EFFECTS
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
// 🔢 ANIMATED COUNTERS
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
// 🌓 THEME TOGGLE
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
// 🖼️ LAZY LOAD FADE-IN
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
// ✨ PARTICLES BACKGROUND
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
// 💚 NEON GLOW EFFECT
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
"
Observation: Create successful: /app/enhancements.js
