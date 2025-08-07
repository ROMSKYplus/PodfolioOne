// Enhanced JavaScript functionality for Full-Stack Developer Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality (Your existing code enhanced)
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    body.setAttribute('data-bs-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Toggle theme on button click with smooth transition
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class for smooth theme change
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        body.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Remove transition after animation completes
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
    
    // Smooth scrolling for navigation links (Your existing code)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Enhanced Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission with realistic delay
            setTimeout(() => {
                const lang = localStorage.getItem('language') || 'en';
                if (lang === 'en') {
                    alert('Message sent successfully! I\'ll get back to you soon.');
                } else {
                    alert('សាររបស់លោកអ្នកត្រូវបានផ្ញើដោយជោគជ័យ! ខ្ញុំនឹងទំនាក់ទំនងត្រលប់មកវិញ។');
                }
                
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const lang = localStorage.getItem('language') || 'en';
            
            if (email) {
                if (lang === 'en') {
                    alert('Thank you for subscribing to my newsletter!');
                } else {
                    alert('អរគុណសម្រាប់ការជាវព្រឹត្តិប័ត្ររបស់ខ្ញុំ!');
                }
                this.reset();
            }
        });
    }
    
    // Active navigation link highlighting (Enhanced version)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (window.pageYOffset <= 300) {
                        backToTopBtn.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe cards and timeline items for animations
    document.querySelectorAll('.card, .timeline-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animate skill progress bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress .progress-bar');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Typing animation for hero title
    const heroTitle = document.querySelector('#home h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid';
        heroTitle.style.animation = 'blink 1s infinite';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                    heroTitle.style.animation = 'none';
                }, 1000);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });
    
    // Animate statistics numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateNumber(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    function animateNumber(element) {
        const target = parseInt(element.textContent);
        const increment = target / 50; // Animate over 50 steps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 40);
    }
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = getComputedStyle(document.documentElement)
                    .getPropertyValue('--navbar-bg').replace('0.9', '0.95');
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.backgroundColor = getComputedStyle(document.documentElement)
                    .getPropertyValue('--navbar-bg');
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });
    }
    
    // Add particle effect to hero section
    let particleInterval;
    
    function createParticle() {
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255,255,255,0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: floatUp 4s linear forwards;
            z-index: 1;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-10px';
        
        heroSection.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 4000);
    }
    
    // Start particle effect
    particleInterval = setInterval(createParticle, 500);
    
    // Stop particles when not on hero section
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const heroRect = heroSection.getBoundingClientRect();
            const isHeroVisible = heroRect.bottom > 0 && heroRect.top < window.innerHeight;
            
            if (!isHeroVisible && particleInterval) {
                clearInterval(particleInterval);
                particleInterval = null;
            } else if (isHeroVisible && !particleInterval) {
                particleInterval = setInterval(createParticle, 500);
            }
        }
    });
    
    // Add CSS animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { border-color: transparent; }
            51%, 100% { border-color: currentColor; }
        }
        
        @keyframes floatUp {
            0% {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-100vh) rotate(360deg);
            }
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);-
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Portfolio JavaScript loaded successfully! 🚀');
});