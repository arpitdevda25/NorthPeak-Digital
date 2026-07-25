/**
 * NORTHPEAK DIGITAL - INTERACTIVE JAVASCRIPT
 * Handling Mobile Menu, Smooth Scrolling, Plan Pre-selection, and Client-Side Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Element References
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-btn');
  
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  const fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('name-error'),
      validate: (val) => {
        if (!val.trim()) return 'Name is required.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      }
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error'),
      validate: (val) => {
        if (!val.trim()) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val.trim())) return 'Please enter a valid email address.';
        return '';
      }
    },
    phone: {
      input: document.getElementById('phone'),
      error: document.getElementById('phone-error'),
      validate: (val) => {
        if (!val.trim()) return 'Phone number is required.';
        const phoneRegex = /^\+?[\d\s\-\(\)]{7,15}$/;
        if (!phoneRegex.test(val.trim())) return 'Please enter a valid phone number (digits and optional + symbol).';
        return '';
      }
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('message-error'),
      validate: (val) => {
        if (!val.trim()) return 'Message is required.';
        if (val.trim().length < 10) return 'Message must be at least 10 characters long.';
        return '';
      }
    }
  };

  // -------------------------------------------------------------------
  // 1. Mobile Menu Drawer Toggle
  // -------------------------------------------------------------------
  if (mobileToggle && navMobile) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMobile.hidden = isExpanded;
    });

    // Close menu when clicking any mobile link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMobile.hidden = true;
      });
    });
  }

  // -------------------------------------------------------------------
  // 2. Pricing Plan Pre-Selection
  // -------------------------------------------------------------------
  const selectPlanBtns = document.querySelectorAll('.select-plan-btn');
  selectPlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const planName = btn.getAttribute('data-plan');
      if (planName && fields.message.input) {
        fields.message.input.value = `Hi NorthPeak team, I am interested in your ${planName}. Please get back to me with next steps.`;
        // Clear message error if any
        fields.message.error.textContent = '';
        fields.message.input.classList.remove('invalid');
      }
    });
  });

  // -------------------------------------------------------------------
  // 3. Real-Time Field Blur Validation
  // -------------------------------------------------------------------
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    if (field.input) {
      field.input.addEventListener('blur', () => {
        const errorMsg = field.validate(field.input.value);
        if (errorMsg) {
          field.input.classList.add('invalid');
          field.error.textContent = errorMsg;
        } else {
          field.input.classList.remove('invalid');
          field.error.textContent = '';
        }
      });

      // Clear error on active typing
      field.input.addEventListener('input', () => {
        if (field.input.classList.contains('invalid')) {
          const errorMsg = field.validate(field.input.value);
          if (!errorMsg) {
            field.input.classList.remove('invalid');
            field.error.textContent = '';
          }
        }
      });
    }
  });

  // -------------------------------------------------------------------
  // 4. Form Submit Handler & Validation
  // -------------------------------------------------------------------
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      let firstInvalidInput = null;

      // Validate all fields
      Object.keys(fields).forEach(key => {
        const field = fields[key];
        const errorMsg = field.validate(field.input.value);
        if (errorMsg) {
          isValid = false;
          field.input.classList.add('invalid');
          field.error.textContent = errorMsg;
          if (!firstInvalidInput) {
            firstInvalidInput = field.input;
          }
        } else {
          field.input.classList.remove('invalid');
          field.error.textContent = '';
        }
      });

      if (!isValid) {
        // Show Form Error Banner
        formFeedback.hidden = false;
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Please fill out all required fields with valid information.';
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      // Simulated Loading & Success Submission
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending Request...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        formFeedback.hidden = false;
        formFeedback.className = 'form-feedback success';
        formFeedback.textContent = 'Thank you! Your consultation request has been successfully submitted. Our team will contact you within 24 hours.';

        contactForm.reset();

        // Auto-hide feedback message after 8 seconds
        setTimeout(() => {
          formFeedback.hidden = true;
        }, 8000);
      }, 1200);
    });
  }
});
