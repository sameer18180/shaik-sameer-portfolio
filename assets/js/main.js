/**
 * SHAIK SAMEER — LUXURY DEVELOPER PORTFOLIO
 * Main Interactive Application Script
 */

(function () {
  'use strict';

  // --- 1. Preloader & Cinematic Entrance ---
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.querySelector('.preloader-bar');

  let loadProgress = 0;
  const progressInterval = setInterval(() => {
    loadProgress += Math.floor(Math.random() * 25) + 15;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(progressInterval);
      if (preloaderBar) preloaderBar.style.width = '100%';
      setTimeout(dismissPreloader, 400);
    } else {
      if (preloaderBar) preloaderBar.style.width = loadProgress + '%';
    }
  }, 90);

  function dismissPreloader() {
    if (!preloader || preloader.classList.contains('loaded')) return;
    preloader.classList.add('loaded');
    document.body.classList.add('page-revealed');
  }

  window.addEventListener('load', () => {
    setTimeout(dismissPreloader, 1000);
  });

  // Allow clicking anywhere to skip intro
  if (preloader) {
    preloader.addEventListener('click', dismissPreloader);
  }

  // --- 2. Navbar Scroll Behavior & Top Progress Bar ---
  const navbar = document.querySelector('.navbar');
  const progressBar = document.getElementById('scroll-progress-bar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Top scroll progress
    if (progressBar && docHeight > 0) {
      const progress = (scrollY / docHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }

    // Navbar background switch
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // --- 3. Scroll Spy for Navigation Links ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        mobileNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);

  // --- 4. Mobile Drawer Navigation ---
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeDrawerBtn = document.getElementById('drawer-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  function openDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add('open');
      mobileBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove('open');
      mobileBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // --- 5. Desktop Cursor Halo & Hover Effect ---
  const cursorHalo = document.getElementById('cursor-halo');
  const cursorDot = document.getElementById('cursor-dot');

  if (cursorHalo && cursorDot && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let haloX = mouseX;
    let haloY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    function renderHalo() {
      // Smooth lerp
      haloX += (mouseX - haloX) * 0.15;
      haloY += (mouseY - haloY) * 0.15;
      cursorHalo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`;
      requestAnimationFrame(renderHalo);
    }
    renderHalo();

    // Scale on interactive elements
    const interactables = document.querySelectorAll('a, button, .skill-card, .goal-card, .timeline-card');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorHalo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0) scale(1.35)`;
        cursorHalo.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.04) 50%, transparent 70%)';
      });
      el.addEventListener('mouseleave', () => {
        cursorHalo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0) scale(1)`;
        cursorHalo.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 40%, transparent 70%)';
      });
    });
  }

  // --- 6. Hero Portrait Interactive 3D Tilt ---
  const portraitFrame = document.querySelector('.portrait-frame');
  if (portraitFrame && window.matchMedia('(hover: hover)').matches) {
    portraitFrame.addEventListener('mousemove', (e) => {
      const rect = portraitFrame.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const tiltX = (y / (rect.height / 2)) * -8;
      const tiltY = (x / (rect.width / 2)) * 8;
      portraitFrame.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    portraitFrame.addEventListener('mouseleave', () => {
      portraitFrame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // --- 7. Intersection Observer for Scroll Reveals ---
  const reveals = document.querySelectorAll('.reveal-init');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('reveal-visible'));
  }

  // --- 8. Copy Email to Clipboard & Toast System ---
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer;

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }

  const copyEmailButtons = document.querySelectorAll('.btn-copy-email-trigger');
  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'sameersk1818@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('✓ Email copied to clipboard: ' + email);
        }).catch(() => {
          fallbackCopyText(email);
        });
      } else {
        fallbackCopyText(email);
      }
    });
  });

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('✓ Email copied to clipboard: ' + text);
    } catch (err) {
      showToast('Contact: ' + text);
    }
    document.body.removeChild(textArea);
  }

  // --- 9. Contact Form Validation & Mailto Action ---
  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      // Validation
      if (!name || !email || !message) {
        displayFormFeedback('Please fill out all required fields.', 'error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        displayFormFeedback('Please enter a valid email address.', 'error');
        return;
      }

      // Format mailto link
      const emailSubject = encodeURIComponent(subject ? `Portfolio Inquiry: ${subject} (from ${name})` : `Inquiry from ${name}`);
      const emailBody = encodeURIComponent(`Hello Sameer,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
      const mailtoUrl = `mailto:sameersk1818@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      displayFormFeedback('Preparing your message... Opening your email client to send to sameersk1818@gmail.com.', 'success');
      showToast('Opening your default email client...');

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  function displayFormFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.style.display = 'block';
  }

  // --- 10. Back To Top Smooth Scroll ---
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Current year in footer
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

})();
