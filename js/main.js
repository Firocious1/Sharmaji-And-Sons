/* =============================================
   SHARMAJI & SONS – MAIN.JS
   ============================================= */

'use strict';

/* ── NAVBAR: scroll behaviour + mobile toggle ── */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const burger   = document.getElementById('burgerBtn');
  const navMenu  = document.getElementById('navMenu');
  const navLinks = navMenu.querySelectorAll('a');

  function setScrolled() {
    const scrolled = window.scrollY > 40;
    navbar.classList.toggle('scrolled', scrolled);
  }

  window.addEventListener('scroll', setScrolled, { passive: true });
  setScrolled();

  function openMenu() {
    navMenu.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  navLinks.forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();

/* ── HERO: bg loaded class ── */
(function initHero() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  const bgUrl = heroBg.style.backgroundImage;
  const urlMatch = bgUrl.match(/url\(['"]?(.+?)['"]?\)/);

  if (urlMatch) {
    const img = new Image();
    img.onload = () => heroBg.classList.add('loaded');
    img.src = urlMatch[1];
  } else {
    heroBg.classList.add('loaded');
  }
})();

/* ── FADE-IN ON SCROLL (Intersection Observer) ── */
(function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
})();

/* ── WHATSAPP FLOAT: show after scrolling past hero ── */
(function initWaFloat() {
  const waFloat = document.getElementById('waFloat');
  if (!waFloat) return;

  const heroEl = document.querySelector('.hero');
  const threshold = heroEl ? heroEl.offsetHeight * 0.6 : 400;

  window.addEventListener('scroll', () => {
    waFloat.classList.toggle('visible', window.scrollY > threshold);
  }, { passive: true });
})();

/* ── ACTIVE NAV LINK on scroll ── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__nav a:not(.btn)');
  if (!sections.length || !navLinks.length) return;

  function setActive() {
    let currentId = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();

/* ── CONTACT FORM: validation + Formspree AJAX submit ── */
(function initContactForm() {
  const form       = document.getElementById('contactForm');
  const successBox = document.getElementById('contactSuccess');
  const submitBtn  = document.getElementById('submitBtn');
  if (!form) return;

  const required = form.querySelectorAll('[required]');

  function showError(input, msg) {
    const errEl = input.closest('.form-group')?.querySelector('.form-error');
    input.classList.add('error');
    if (errEl) errEl.textContent = msg;
  }

  function clearError(input) {
    const errEl = input.closest('.form-group')?.querySelector('.form-error');
    input.classList.remove('error');
    if (errEl) errEl.textContent = '';
  }

  required.forEach(input => {
    input.addEventListener('input', () => clearError(input));
    input.addEventListener('change', () => clearError(input));
  });

  function validate() {
    let valid = true;
    required.forEach(input => {
      const isEmpty = !input.value.trim();
      const isEmail = input.type === 'email' && input.value.trim() &&
                      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      if (isEmpty) {
        showError(input, 'This field is required.');
        valid = false;
      } else if (isEmail) {
        showError(input, 'Please enter a valid email address.');
        valid = false;
      }
    });
    return valid;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.classList.add('form-submitting');
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.hidden = true;
        successBox.hidden = false;
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const json = await response.json();
        const msg = json?.errors?.map(err => err.message).join(', ') ||
                    'Something went wrong. Please email us directly.';
        showFormLevelError(msg);
      }
    } catch {
      showFormLevelError('Network error. Please try again or contact us via WhatsApp.');
    } finally {
      submitBtn.classList.remove('form-submitting');
      submitBtn.disabled = false;
    }
  });

  function showFormLevelError(msg) {
    let errBox = form.querySelector('.form-level-error');
    if (!errBox) {
      errBox = document.createElement('p');
      errBox.className = 'form-level-error';
      errBox.style.cssText = 'color:#DC2626;font-size:.875rem;margin-top:.75rem;font-weight:500;';
      form.querySelector('.form-actions').after(errBox);
    }
    errBox.textContent = msg;
  }
})();

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
