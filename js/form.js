const form = document.getElementById('quoteForm');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const existingError = form.querySelector('.form__error');
    if (existingError) existingError.remove();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      if (response.ok) {
        form.innerHTML = '<p class="form__success">Thanks! We\'ll be in touch within 24 hours to schedule your free estimate.</p>';
      } else {
        throw new Error('Server error');
      }
    } catch {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      const error = document.createElement('p');
      error.className = 'form__error';
      error.textContent = 'Something went wrong. Please call us directly at (512) 948-1734.';
      form.appendChild(error);
    }
  });
}
