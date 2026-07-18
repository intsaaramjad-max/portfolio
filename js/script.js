/**
 * Intsaar Amjad - Personal Portfolio Site JavaScript Core
 * Features:
 *   - Dark/Light Theme Toggle (with localStorage persistence)
 *   - Responsive Mobile Navigation & Accessibility Management
 *   - IntersectionObserver Scroll Spy (Active link highlighting)
 *   - IntersectionObserver Reveal-on-Scroll Animations
 *   - Back-to-Top Button Visibility & Scrolling
 *   - Accessible Client-side Contact Form Validation & Submission Mocking
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initScrollSpy();
  initScrollReveal();
  initBackToTop();
  initSkillFilters();
  initFormValidation();
});

/* ==========================================================================
   THEME TOGGLE SYSTEM (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Retrieve saved preference or check OS preference
  const savedTheme = localStorage.getItem('theme');
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (userPrefersDark ? 'dark' : 'light');
  
  // Set theme on html node
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeButtonAria(themeToggle, currentTheme);

  themeToggle.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButtonAria(themeToggle, newTheme);
  });
}

function updateThemeButtonAria(button, theme) {
  const isDark = theme === 'dark';
  button.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}


/* ==========================================================================
   RESPONSIVE MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinksList = document.querySelectorAll('.nav-link');

  if (!menuToggle || !mainNav) return;

  // Toggle navigation menu
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
  });

  // Close mobile nav when clicking links
  navLinksList.forEach(link => {
    link.addEventListener('click', (e) => {
      // Close menu if it is currently open (mobile state)
      if (menuToggle.getAttribute('aria-expanded') === 'true') {
        toggleMenu(false);
      }
      
      // Shift keyboard focus to targeted section for screen readers
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          setTimeout(() => {
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus({ preventScroll: true });
          }, 400); // Wait for smooth scroll movement
        }
      }
    });
  });

  // Handle escape key to close menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      menuToggle.focus();
    }
  });

  function toggleMenu(openState) {
    menuToggle.setAttribute('aria-expanded', openState ? 'true' : 'false');
    if (openState) {
      mainNav.classList.add('open');
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    } else {
      mainNav.classList.remove('open');
      document.body.style.overflow = ''; // Release scroll lock
    }
  }
}


/* ==========================================================================
   ACTIVE NAVIGATION SCROLL SPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('main > section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;

  // Configuration thresholds for section checking
  const observerOptions = {
    root: null,
    rootMargin: '-25% 0px -55% 0px', // Trigger when section occupies the active view range
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          const href = link.getAttribute('href').substring(1);
          if (href === activeId) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
}


/* ==========================================================================
   SCROLL REVEAL ENTRANCE ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (revealElements.length === 0) return;

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px', // Reveal slightly before the element fully enters viewport
    threshold: 0.1
  };

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animates once, stops observing
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, revealOptions);
  revealElements.forEach(elem => observer.observe(elem));
}


/* ==========================================================================
   SKILLS FILTERING
   ========================================================================== */
function initSkillFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterButtons.length || !skillCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedFilter = button.getAttribute('data-filter') || 'all';

      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      skillCards.forEach((card) => {
        const categories = (card.getAttribute('data-categories') || '').split(/\s+/).filter(Boolean);
        const shouldShow = selectedFilter === 'all' || categories.includes(selectedFilter);
        card.classList.toggle('is-hidden', !shouldShow);
      });
    });
  });
}

/* ==========================================================================
   BACK TO TOP TRIGGER
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  // Toggle button visibility based on vertical scrolling offset
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  // Smooth scroll up on button click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Set focus back to main top container logo or body
    const logoLink = document.querySelector('.logo');
    if (logoLink) {
      logoLink.focus();
    }
  });
}


/* ==========================================================================
   ACCESSIBLE CONTACT FORM VALIDATION & SUBMISSION
   ========================================================================== */
function initFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById('form-name'),
      error: document.getElementById('name-error'),
      validate: (val) => val.trim().length > 0,
      errorMsg: 'Full Name is required.'
    },
    email: {
      input: document.getElementById('form-email'),
      error: document.getElementById('email-error'),
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      errorMsg: 'Please enter a valid email address.'
    },
    subject: {
      input: document.getElementById('form-subject'),
      error: document.getElementById('subject-error'),
      validate: (val) => val.trim().length > 0,
      errorMsg: 'Subject is required.'
    },
    message: {
      input: document.getElementById('form-message'),
      error: document.getElementById('message-error'),
      validate: (val) => val.trim().length > 0,
      errorMsg: 'Message content cannot be blank.'
    }
  };

  // Setup live validation events
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    
    // Clear styling on focus
    field.input.addEventListener('focus', () => {
      clearFieldError(field);
    });

    // Validate on blur
    field.input.addEventListener('blur', () => {
      validateField(field);
    });
  });

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    let firstInvalidField = null;

    // Validate all fields
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      const isValid = validateField(field);
      if (!isValid) {
        isFormValid = false;
        if (!firstInvalidField) {
          firstInvalidField = field.input;
        }
      }
    });

    if (!isFormValid) {
      // Focus first error field for accessiblity compliance
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    // Process Valid Submission
    submitMockForm(form);
  });

  function validateField(field) {
    const val = field.input.value;
    const isValid = field.validate(val);

    if (!isValid) {
      field.input.parentNode.classList.add('has-error');
      field.input.setAttribute('aria-invalid', 'true');
      field.input.setAttribute('aria-describedby', field.error.id);
      field.error.textContent = field.errorMsg;
    } else {
      clearFieldError(field);
    }
    return isValid;
  }

  function clearFieldError(field) {
    field.input.parentNode.classList.remove('has-error');
    field.input.removeAttribute('aria-invalid');
    field.input.removeAttribute('aria-describedby');
    field.error.textContent = '';
  }

  function submitMockForm(contactForm) {
    const submitBtn = contactForm.querySelector('.btn-submit');
    const formStatus = document.getElementById('form-status');
    
    // Disable submit and trigger loading states
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    // Mock asynchronous backend request (1.5 seconds)
    setTimeout(() => {
      // Release loading states
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;

      // Reset form fields
      contactForm.reset();

      // Show success toast feedback
      formStatus.textContent = 'Thank you, Intsaar has received your message! I will respond to you shortly.';
      formStatus.classList.add('success');
      formStatus.style.display = 'block';

      // Auto-hide success toast after 8 seconds
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 8000);

    }, 1500);
  }
}
