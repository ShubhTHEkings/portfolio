// ================================
// Typing Animation
// ================================
const roles = [
    "Cloud Engineer ☁️",
    "DevOps Enthusiast 🚀",
    "AI Innovator 🤖",
    "Full-Stack Developer 💻",
    "IoT Builder 🔧",
    "Problem Solver 💡"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let timeout = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentRole.length) {
        timeout = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    setTimeout(typeRole, timeout);
}

// Start typing animation
document.addEventListener('DOMContentLoaded', typeRole);

// ================================
// Navbar Scroll Effect
// ================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ================================
// Mobile Navigation Toggle
// ================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ================================
// Smooth Scrolling for Navigation
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Project Filtering
// ================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.6s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ================================
// Skill Bar Animation
// ================================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ================================
// Scroll Reveal Animation
// ================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.project-card, .skill-category, .highlight-item, .about-image, .about-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    reveals.forEach(element => observer.observe(element));
}

// ================================
// Contact Form Handling
// ================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:shubhamgangurde@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open mail client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for reaching out! Your default email client will open. If it doesn\'t, please email me directly at shubhamgangurde@example.com');
    
    // Reset form
    contactForm.reset();
});

// ================================
// Particle Effect for Hero Section
// ================================
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${99 + Math.random() * 137}, ${102 + Math.random() * 150}, ${241}, 0.${Math.floor(Math.random() * 5 + 2)})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${10 + Math.random() * 20}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// ================================
// Active Navigation Link Highlight
// ================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ================================
// Cursor Trail Effect (Optional)
// ================================
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ================================
// Performance Optimization: Lazy Loading Images
// ================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ================================
// Add Hover Effects to Cards
// ================================
function addCardEffects() {
    const cards = document.querySelectorAll('.project-card, .highlight-item, .skill-category');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ================================
// Copy Email to Clipboard
// ================================
function setupEmailCopy() {
    const emailElements = document.querySelectorAll('.contact-item p');
    
    emailElements.forEach(element => {
        if (element.textContent.includes('@')) {
            element.style.cursor = 'pointer';
            element.title = 'Click to copy email';
            
            element.addEventListener('click', () => {
                navigator.clipboard.writeText(element.textContent);
                
                const originalText = element.textContent;
                element.textContent = '✓ Copied!';
                element.style.color = 'var(--accent)';
                
                setTimeout(() => {
                    element.textContent = originalText;
                    element.style.color = '';
                }, 2000);
            });
        }
    });
}

// ================================
// Project Card Quick View
// ================================
function setupProjectQuickView() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        const content = card.querySelector('.project-content');
        
        card.addEventListener('click', (e) => {
            // Don't trigger on link clicks
            if (e.target.tagName !== 'A' && !e.target.closest('a')) {
                card.classList.toggle('expanded');
            }
        });
    });
}

// ================================
// Initialize All Functions
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    animateSkillBars();
    revealOnScroll();
    updateActiveNavLink();
    
    // Initialize effects
    createParticles();
    addCardEffects();
    setupEmailCopy();
    setupProjectQuickView();
    
    // Performance
    lazyLoadImages();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
    console.log('%c👋 Welcome to my portfolio! Feel free to explore.', 'color: #ec4899; font-size: 14px;');
    console.log('%cBuilt with ❤️ for Codédex Back2School Challenge', 'color: #10b981; font-size: 12px;');
});

// ================================
// Easter Egg: Konami Code
// ================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        alert('🎉 You found the secret! Konami Code activated! 🚀');
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ================================
// Dark Mode Toggle (Bonus Feature)
// ================================
function setupDarkModeToggle() {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // You can add a toggle button in the navbar if desired
    // For now, it respects system preferences
}

// ================================
// Performance Monitoring
// ================================
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`%c⚡ Page loaded in ${loadTime.toFixed(2)}ms`, 'color: #10b981; font-weight: bold;');
});

// ================================
// Smooth Back to Top Button
// ================================
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(10px)';
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0) scale(1)';
    });
}

// Initialize back to top button
createBackToTopButton();

// ================================
// Analytics (Optional - Add your tracking)
// ================================
function trackEvent(category, action, label) {
    // Add your analytics tracking here
    console.log(`Event: ${category} - ${action} - ${label}`);
}

// Track button clicks
document.querySelectorAll('.btn, .project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('Button', 'Click', btn.textContent);
    });
});
