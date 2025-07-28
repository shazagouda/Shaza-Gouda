 // Navigation functionality
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.page-section');
        const mobileMenu = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('.nav-menu');

        // Page navigation
        function showPage(pageId) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

            // Close mobile menu if open
            navMenu.classList.remove('active');
            
            // Trigger scroll animations
            setTimeout(() => {
                const animatedElements = document.querySelectorAll('.animate-on-scroll');
                animatedElements.forEach(el => {
                    el.classList.add('animated');
                });
            }, 100);
        }

        // Add click events to navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
            });
        });

        // Mobile menu toggle
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simulate form submission
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            e.target.reset();
        });

        // Smooth navbar on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            // Trigger initial animations
            setTimeout(() => {
                const animatedElements = document.querySelectorAll('.animate-on-scroll');
                animatedElements.forEach(el => {
                    el.classList.add('animated');
                });
            }, 500);
        });

        // Add hover effects to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(-10px) scale(1)';
            });
        });

        // Add typewriter effect to home page
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Particle background animation
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: rgba(102, 126, 234, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                animation: floatUp ${Math.random() * 3 + 2}s linear forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 5000);
        }

        // Add particle animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                to {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Create particles periodically
        setInterval(createParticle, 300);

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });