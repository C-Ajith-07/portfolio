const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0) * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.dataset.delay = i % 3;
    observer.observe(el);
  });
  
  // Active nav link highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--white)' : '';
    });
  });
  
  // Contact form button feedback
  document.querySelector('.form-btn').addEventListener('click', function() {
    this.textContent = '✓ Message Sent!';
    this.style.background = '#16a34a';
    setTimeout(() => {
      this.textContent = 'Send Message →';
      this.style.background = '';
    }, 2500);
  });