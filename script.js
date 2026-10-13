/**
 * Keefer Law Firm PLC - Interactive Logic (Task 04)
 * Handles responsive mobile navigation toggle and case inquiry form submission.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const expanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close menu when clicking navigation links on mobile
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

/**
 * Handle Case Evaluation Form Submission
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('clientName');
  const emailInput = document.getElementById('clientEmail');
  const phoneInput = document.getElementById('clientPhone');
  const messageInput = document.getElementById('caseDescription');
  const feedbackEl = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !email || !phone) {
    feedbackEl.className = 'form-feedback error';
    feedbackEl.textContent = 'Please fill out all required fields (Name, Email, and Phone).';
    feedbackEl.style.display = 'block';
    return;
  }

  // Email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedbackEl.className = 'form-feedback error';
    feedbackEl.textContent = 'Please enter a valid email address.';
    feedbackEl.style.display = 'block';
    return;
  }

  // Show processing state
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Submitting...';

  setTimeout(() => {
    feedbackEl.className = 'form-feedback success';
    feedbackEl.innerHTML = `✓ Thank you, <strong>${escapeHtml(name)}</strong>! Your case details have been securely received. An attorney will contact you promptly at <strong>${escapeHtml(phone)}</strong>.`;
    feedbackEl.style.display = 'block';

    // Reset inputs
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    if (messageInput) messageInput.value = '';

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }, 600);
}

/**
 * Basic HTML sanitizer
 */
function escapeHtml(string) {
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
