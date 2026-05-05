document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.innerText = new Date().getFullYear();
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) progressBar.style.width = scrolled + '%';
  });

  const fadeElements = document.querySelectorAll('.fade-up');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeElements.forEach(el => fadeObserver.observe(el));
  setTimeout(() => {
    document.querySelectorAll('#home .fade-up').forEach(el => el.classList.add('visible'));
  }, 100);

  const navLinks = document.querySelectorAll('.nav-links a, .btn-outline-copper[href^="#"]');
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      }
    });
  });

  const typedElement = document.getElementById('typedText');
  if (typedElement) {
    const phrases = [
      "Results-driven Full-Stack Developer, specialized in Angular, PHP, Node.js, and .NET Core.",
      "Delivering end-to-end web apps with secure APIs, responsive frontends, and scalable databases.",
      "3rd-year CS student @ Assiut University · 3+ internships · 7+ projects shipped."
    ];
    let phraseIndex = 0, charIndex = 0, isDeleting = false;
    function typeEffect() {
      const current = phrases[phraseIndex];
      if (isDeleting) {
        typedElement.innerHTML = current.substring(0, charIndex - 1) + '<span class="typed-cursor">|</span>';
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeEffect, 300);
          return;
        }
        setTimeout(typeEffect, 40);
      } else {
        typedElement.innerHTML = current.substring(0, charIndex + 1) + '<span class="typed-cursor">|</span>';
        charIndex++;
        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2200);
          return;
        }
        setTimeout(typeEffect, 55);
      }
    }
    typeEffect();
  }
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const msg = document.getElementById('contactMsg').value.trim();
      if (!name || !email || !msg) {
        alert("⚠️ Please fill all fields.");
        return;
      }
      if (!email.includes('@') || !email.includes('.')) {
        alert("⚠️ Enter a valid email address.");
        return;
      }
      alert(`✨ Thank you ${name}! Your message has been received. I'll reply within 24h.`);
      contactForm.reset();
    });
  }

  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (navbar) {
      const scrolled = window.scrollY > 50;
      navbar.style.background = scrolled ? 'rgba(255, 250, 245, 0.98)' : 'rgba(255, 250, 245, 0.92)';
      navbar.style.backdropFilter = scrolled ? 'blur(14px)' : 'blur(10px)';
    }
  });

  const resumeBtn = document.getElementById('resumeBtn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const cvUrl = './Shaza_CV.pdf';
      window.open(cvUrl, '_blank');
    });
  }
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        let current = 0;
        const increment = target / 30;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            el.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            el.innerText = target;
          }
        };
        updateCounter();
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => countObserver.observe(el));

  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.3s ease';
      document.body.style.opacity = '1';
    }, 100);
  });

  const githubMap = {
    trustlinkGh: "https://github.com/shazagouda/TrustLink_Project",
    fatoraGh: "https://github.com/mostafaradwan007/invoice-laravel-project",
    starGh: "https://github.com/nawal-ali/e-commerce",
    astroGh: "https://github.com/shazagouda/astroverse",
    seeForMeGh: "https://github.com/shazagouda/SeeForMee",
    uniGh: "https://github.com/shazagouda/university-system"
  };
  for (const [id, url] of Object.entries(githubMap)) {
    const el = document.getElementById(id);
    if (el) el.href = url;
  }

  const certLinks = {
    certNti: "https://drive.google.com/file/d/13_Ovoe0Cw8t85QXB2dw6Z1Rqzg-yU4HF/view",
    certIti: "https://drive.google.com/file/d/1ERqfzCbzSisLP9RBKHvY8VQCDqDF9CbC/view",
    certAngular: "https://drive.google.com/file/d/1MvmYVdM-McYFA1pDGLiGph60nGEPO5iT/view",
    certWinter: "#",
    certIcpc: "#"
  };
  for (const [id, url] of Object.entries(certLinks)) {
    const el = document.getElementById(id);
    if (el) el.href = url;
  }

  const copyEmailSpan = document.getElementById('copyEmail');
  if (copyEmailSpan) {
    copyEmailSpan.addEventListener('click', () => {
      const email = "shazagouda48@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        alert("📧 Email copied to clipboard!");
      }).catch(() => {
        alert("⚠️ Could not copy email.");
      });
    });
  }

  const floatingIcons = document.querySelectorAll('.geom-bg-icon');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    floatingIcons.forEach((icon, idx) => {
      const shiftX = (x - 0.5) * 20;
      const shiftY = (y - 0.5) * 20;
      icon.style.transform = `translate(${shiftX * (idx % 2 === 0 ? 1 : -1)}px, ${shiftY * (idx % 2 === 0 ? 1 : -1)}px)`;
    });
  });
});