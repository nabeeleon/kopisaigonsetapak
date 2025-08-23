// MIND-BLOWING Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Add mind-blowing sound effect (subtle)
    if (navMenu.classList.contains('active')) {
        playSound('menu-open');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// MIND-BLOWING Navbar background change on scroll with 3D effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(250, 243, 224, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.transform = 'translateZ(20px)';
        navbar.style.boxShadow = '0 10px 30px rgba(111, 78, 55, 0.15)';
    } else {
        navbar.style.background = 'rgba(250, 243, 224, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.transform = 'translateZ(0)';
        navbar.style.boxShadow = 'none';
    }
    
    // MIND-BLOWING Parallax effect for floating beans
    const beans = document.querySelectorAll('.floating-bean');
    beans.forEach((bean, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        bean.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// MIND-BLOWING Smooth scrolling with 3D perspective - ONLY for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Completely remove 3D effects that cause button issues
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Simple scale effect without 3D
            setTimeout(() => {
                target.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    target.style.transform = 'scale(1)';
                }, 300);
            }, 500);
        }
    });
});

// SPECIFIC FIX: Ensure location section buttons work
document.addEventListener('DOMContentLoaded', function() {
    // Get Directions button
    const getDirectionsBtn = document.querySelector('a[href*="maps.app.goo.gl"]');
    if (getDirectionsBtn) {
        getDirectionsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            window.open(this.href, '_blank');
            console.log('Get Directions clicked!');
        });
    }
    
    // Follow Us button
    const followUsBtn = document.querySelector('a[href*="instagram.com"]');
    if (followUsBtn) {
        followUsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            window.open(this.href, '_blank');
            console.log('Follow Us clicked!');
        });
    }
});

// Ensure external links work properly
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Allow external links to work normally
        console.log('External link clicked:', this.href);
    });
});

// MIND-BLOWING Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Add mind-blowing entrance effect
            if (entry.target.classList.contains('product-card')) {
                entry.target.style.transform = 'translateY(0) translateZ(50px) rotateY(10deg)';
                setTimeout(() => {
                    entry.target.style.transform = 'translateY(0) translateZ(0) rotateY(0deg)';
                }, 600);
            }
        }
    });
}, observerOptions);

// Observe product cards for MIND-BLOWING animation
document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// MIND-BLOWING Form handling with visual feedback
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Add mind-blowing success effect
            this.style.transform = 'scale(1.02) translateZ(20px)';
            this.style.boxShadow = '0 20px 40px rgba(193, 154, 107, 0.3)';
            
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
            
            setTimeout(() => {
                this.style.transform = 'scale(1) translateZ(0)';
                this.style.boxShadow = 'var(--shadow)';
            }, 1000);
        } else {
            showNotification('Please fill in all fields.', 'error');
        }
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            // Add mind-blowing success effect
            this.style.transform = 'scale(1.05)';
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            this.reset();
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 1000);
        } else {
            showNotification('Please enter a valid email address.', 'error');
        }
    });
}

// MIND-BLOWING Notification system with 3D effects
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = ` 
        <div class="notification-content"> 
            <i class="fas fa-info-circle"></i> 
            <span>${message}</span> 
        </div> 
        <button class="notification-close" onclick="this.parentElement.remove()"> 
            <i class="fas fa-times"></i> 
        </button> 
    `;
    
    // Add MIND-BLOWING 3D entrance effect
    notification.style.transform = 'translateX(100%) rotateY(90deg)';
    notification.style.opacity = '0';
    
    // Add to page
    document.body.appendChild(notification);
    
    // MIND-BLOWING entrance animation
    setTimeout(() => {
        notification.style.transform = 'translateX(0) rotateY(0deg)';
        notification.style.opacity = '1';
    }, 100);
    
    // Auto-remove after 5 seconds with MIND-BLOWING exit effect
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%) rotateY(-90deg)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// MIND-BLOWING Counter animation with 3D effects
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // MIND-BLOWING easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
        
        // Add MIND-BLOWING 3D effect during counting
        element.style.transform = `scale(${1 + progress * 0.1}) translateZ(${progress * 20}px)`;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Final MIND-BLOWING effect
            element.style.transform = 'scale(1.1) translateZ(30px)';
            setTimeout(() => {
                element.style.transform = 'scale(1) translateZ(0)';
            }, 200);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// MIND-BLOWING CSS injection for notifications
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0 20px rgba(193, 154, 107, 0.3);
        padding: 15px 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 1000;
        max-width: 400px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
        border: 2px solid transparent;
    }
    
    .notification:hover {
        transform: translateY(-5px) translateZ(20px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(193, 154, 107, 0.5);
        border-color: var(--highlight-color);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
    }
    
    .notification i:first-child {
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }
    
    .notification:hover i:first-child {
        transform: scale(1.2) rotate(10deg);
    }
    
    .notification-success i:first-child {
        color: #10b981;
    }
    
    .notification-error i:first-child {
        color: #ef4444;
    }
    
    .notification-info i:first-child {
        color: #3b82f6;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: #6b7280;
        cursor: pointer;
        padding: 5px;
        border-radius: 5px;
        transition: all 0.3s ease;
        transform-style: preserve-3d;
    }
    
    .notification-close:hover {
        background: #f3f4f6;
        color: #374151;
        transform: scale(1.1) rotate(90deg);
    }
`;

// Inject MIND-BLOWING notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// MIND-BLOWING Stats animation with 3D effects
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/\d/g, '');
                
                // Add MIND-BLOWING delay for each stat
                setTimeout(() => {
                    animateCounter(stat, 0, number, 2000);
                }, index * 200);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe story stats section
const storyStats = document.querySelector('.story-stats');
if (storyStats) {
    statsObserver.observe(storyStats);
}

// MIND-BLOWING Vietnamese coffee culture elements
document.addEventListener('DOMContentLoaded', function() {
    // Add MIND-BLOWING Vietnamese coffee terminology tooltips
    const vietnameseTerms = document.querySelectorAll('.product-description');
    vietnameseTerms.forEach(term => {
        if (term.textContent.includes('cà phê sữa đặc')) {
            term.innerHTML += ' <span class="tooltip" title="Traditional Vietnamese coffee with condensed milk" style="color: var(--highlight-color); font-weight: 600; cursor: help;">(cà phê sữa đặc)</span>';
        }
    });
    
    // Add MIND-BLOWING phin filter icon to story section
    const storyImage = document.querySelector('.story-image');
    if (storyImage) {
        const phinIcon = document.createElement('div');
        phinIcon.className = 'phin-filter-icon';
        phinIcon.innerHTML = '<i class="fas fa-filter"></i>';
        phinIcon.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(193, 154, 107, 0.9);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            z-index: 3;
            animation: pulse 2s infinite;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        // Add MIND-BLOWING hover effect
        phinIcon.addEventListener('mouseenter', () => {
            phinIcon.style.transform = 'scale(1.2) rotate(180deg)';
            phinIcon.style.background = 'var(--highlight-color)';
        });
        
        phinIcon.addEventListener('mouseleave', () => {
            phinIcon.style.transform = 'scale(1) rotate(0deg)';
            phinIcon.style.background = 'rgba(193, 154, 107, 0.9)';
        });
        
        storyImage.appendChild(phinIcon);
    }
    
    // Add MIND-BLOWING coffee bean particle system
    createCoffeeBeanParticles();
});

// MIND-BLOWING Coffee bean particle system
function createCoffeeBeanParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'coffee-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: var(--highlight-color);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            z-index: 1;
        `;
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        hero.appendChild(particle);
    }
}

// MIND-BLOWING Particle animation
const particleAnimation = `
    @keyframes floatParticle {
        0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
        }
        25% { 
            transform: translateY(-30px) translateX(15px) rotate(90deg); 
            opacity: 0.8;
        }
        50% { 
            transform: translateY(-60px) translateX(-10px) rotate(180deg); 
            opacity: 0.5;
        }
        75% { 
            transform: translateY(-30px) translateX(-20px) rotate(270deg); 
            opacity: 0.9;
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;

// Inject MIND-BLOWING particle animations
const particleStyle = document.createElement('style');
particleStyle.textContent = particleAnimation;
document.head.appendChild(particleStyle);

// MIND-BLOWING Sound effects (subtle)
function playSound(type) {
    // Create subtle audio context for mind-blowing effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'menu-open') {
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    }
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// MIND-BLOWING Mouse movement effects
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const heroRect = hero.getBoundingClientRect();
    
    if (e.clientY < heroRect.bottom && e.clientY > heroRect.top) {
        const x = (e.clientX - heroRect.left) / heroRect.width;
        const y = (e.clientY - heroRect.top) / heroRect.height;
        
        // Add MIND-BLOWING parallax effect to hero elements
        const heroContent = document.querySelector('.hero-content');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroContent && heroVisual) {
            heroContent.style.transform = `translateX(${(x - 0.5) * 20}px) translateY(${(y - 0.5) * 10}px)`;
            heroVisual.style.transform = `translateX(${(x - 0.5) * -20}px) translateY(${(y - 0.5) * -10}px)`;
        }
    }
});

// MIND-BLOWING Scroll-triggered animations
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Add MIND-BLOWING rotation to sections based on scroll
    document.querySelectorAll('section').forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
            const progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
            const rotation = Math.sin(progress * Math.PI) * 2;
            
            section.style.transform = `rotateX(${rotation}deg)`;
        }
    });
});

// MIND-BLOWING Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-5px) scale(1.05) rotateX(10deg)';
        btn.style.boxShadow = '0 20px 40px rgba(111, 78, 55, 0.3), 0 0 30px rgba(193, 154, 107, 0.5)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        btn.style.boxShadow = 'var(--shadow)';
    });
});

// MIND-BLOWING Product card interactions
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) translateZ(50px) rotateY(5deg)';
        card.style.boxShadow = '0 30px 60px rgba(111, 78, 55, 0.2), 0 0 40px rgba(193, 154, 107, 0.4)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) translateZ(0) rotateY(0deg)';
        card.style.boxShadow = 'var(--shadow)';
    });
});

console.log('🚀 MIND-BLOWING Vietnamese Coffee Website Loaded! ☕✨'); 

// 3D-READY Smooth Scroll Animations
const smoothRevealElements = document.querySelectorAll('.smooth-reveal');

const smoothRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

smoothRevealElements.forEach(element => {
    smoothRevealObserver.observe(element);
});

// 3D-READY Performance Optimized Animations
let ticking = false;

function updateAnimations() {
    const scrolled = window.scrollY;
    
    // Smooth parallax for coffee waves
    const waves = document.querySelectorAll('.coffee-wave');
    waves.forEach((wave, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = scrolled * speed;
        wave.style.transform = `translateY(${yPos}px)`;
    });
    
    // Pure elegance - no flying elements
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// 3D-READY Mouse Interaction (Lightweight)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Lightweight mouse following for coffee particles
    const particles = document.querySelectorAll('.coffee-particle');
    particles.forEach((particle, index) => {
        const speed = 0.02 + (index * 0.005);
        const xOffset = (mouseX - window.innerWidth / 2) * speed;
        const yOffset = (mouseY - window.innerHeight / 2) * speed;
        
        particle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// 3D-READY Touch Support for Mobile
document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseX = touch.clientX;
        mouseY = touch.clientY;
    }
});

// 3D-READY Performance Monitoring
let frameCount = 0;
let lastTime = performance.now();

function monitorPerformance(currentTime) {
    frameCount++;
    
    if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Log performance (remove in production)
        if (fps < 30) {
            console.log('Performance warning: Low FPS detected');
        }
        
        frameCount = 0;
        lastTime = currentTime;
    }
    
    requestAnimationFrame(monitorPerformance);
}

requestAnimationFrame(monitorPerformance);

// 3D-READY Future Integration Points
window.coffeeWebsite3D = {
    // Future 3D model loading
    load3DModel: function(modelPath, elementId) {
        console.log('3D model loading system ready for:', modelPath, elementId);
        // This will be implemented when you're ready for 3D
    },
    
    // Future 3D animation control
    animate3D: function(elementId, animationType) {
        console.log('3D animation system ready for:', elementId, animationType);
        // This will be implemented when you're ready for 3D
    },
    
    // Performance optimization
    optimizeForDevice: function() {
        const isMobile = window.innerWidth <= 768;
        const isLowEnd = navigator.hardwareConcurrency <= 4;
        
        if (isMobile || isLowEnd) {
            // Reduce animations for better performance
            document.body.classList.add('performance-mode');
        }
    }
};

// Initialize 3D-ready optimizations
window.coffeeWebsite3D.optimizeForDevice();

// ✨ ELEGANT INTERACTIONS
class ElegantInteractions {
    constructor() {
        this.liquidContainer = document.getElementById('liquidContainer');
        this.ambientContainer = document.getElementById('ambientContainer');
        this.isMouseDown = false;
        
        this.init();
    }
    
    init() {
        // Elegant interactions only
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        // Gentle wave following
        this.setupWaveFollowing();
    }
    
    handleMouseMove(e) {
        // Only gentle wave following for elegance
        this.updateLiquidWaves(e.clientX, e.clientY);
    }
    
    // Removed all splash, trail, and ripple effects for pure elegance
    
    updateLiquidWaves(mouseX, mouseY) {
        const waves = this.liquidContainer.querySelectorAll('.liquid-wave');
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        waves.forEach((wave, index) => {
            const offsetX = (mouseX - centerX) * (0.005 + index * 0.002);
            const offsetY = (mouseY - centerY) * (0.003 + index * 0.001);
            
            wave.style.transform = `translateX(${-25 + offsetX}%) translateY(${offsetY}px) scaleY(${1 + Math.abs(offsetX) * 0.0005})`;
        });
    }
    
    setupWaveFollowing() {
        let animationId;
        
        const animateWaves = () => {
            const waves = this.liquidContainer.querySelectorAll('.liquid-wave');
            const time = Date.now() * 0.0005; // Slower time
            
            waves.forEach((wave, index) => {
                const phase = index * 1;
                const amplitude = 5 + index * 2; // Much smaller amplitude
                const frequency = 0.2 + index * 0.1; // Slower frequency
                
                const yOffset = Math.sin(time * frequency + phase) * amplitude;
                const scaleX = 1 + Math.sin(time * frequency * 0.8 + phase) * 0.02;
                const scaleY = 1 + Math.cos(time * frequency + phase) * 0.05;
                
                wave.style.transform += ` translateY(${yOffset}px) scaleX(${scaleX}) scaleY(${scaleY})`;
            });
            
            animationId = requestAnimationFrame(animateWaves);
        };
        
        animateWaves();
    }
}

// ✨ ELEGANT BUTTON INTERACTIONS (Removed liquid effects for pure elegance)

// ✨ ELEGANT SCROLL ANIMATIONS WITH SMOOTH SECTION TRANSITIONS
class ElegantScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupSectionTransitions();
        this.setupScrollObserver();
        this.setupCounterAnimations();
        this.setupSmoothReveal();
    }
    
    setupSectionTransitions() {
        // Smooth section reveal observer
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    
                    // Add staggered animation for child elements
                    const children = entry.target.querySelectorAll('.philosophy-text, .heritage-text, .experience-card, .stat-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -80px 0px'
        });
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            sectionObserver.observe(section);
        });
        
        // Make hero section visible immediately
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('section-visible');
        }
    }
    
    setupScrollObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Special animations for different elements
                    if (entry.target.classList.contains('stat-item')) {
                        this.animateCounter(entry.target);
                    }
                    
                    if (entry.target.classList.contains('experience-card')) {
                        setTimeout(() => {
                            entry.target.style.transform = 'translateY(0)';
                            entry.target.style.opacity = '1';
                        }, entry.target.dataset.delay || 0);
                    }
                }
            });
        }, this.observerOptions);
        
        // Observe elements
        document.querySelectorAll('.stat-item, .experience-card, .heritage-text, .philosophy-text').forEach(el => {
            observer.observe(el);
        });
    }
    
    animateCounter(element) {
        const numberElement = element.querySelector('.stat-number');
        if (!numberElement) return;
        
        const finalNumber = numberElement.textContent;
        const isPercentage = finalNumber.includes('%');
        const isTime = finalNumber.includes('min');
        const isYear = finalNumber.includes('1954');
        
        let targetNumber = parseInt(finalNumber);
        let currentNumber = 0;
        
        if (isYear) {
            currentNumber = 1950;
            targetNumber = 1954;
        } else if (isTime) {
            targetNumber = 5;
        } else if (isPercentage) {
            targetNumber = 100;
        }
        
        const increment = targetNumber / 60; // 60 frames
        
        const animate = () => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                if (isPercentage) numberElement.textContent = currentNumber + '%';
                else if (isTime) numberElement.textContent = currentNumber + 'min';
                else numberElement.textContent = currentNumber;
                return;
            }
            
            if (isPercentage) numberElement.textContent = Math.floor(currentNumber) + '%';
            else if (isTime) numberElement.textContent = Math.floor(currentNumber) + 'min';
            else numberElement.textContent = Math.floor(currentNumber);
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
    
    setupCounterAnimations() {
        // Add initial styles for counter animation
        document.querySelectorAll('.stat-number').forEach(el => {
            el.style.transition = 'all 0.3s ease';
        });
    }
    
    setupSmoothReveal() {
        // Add reveal animation styles
        const style = document.createElement('style');
        style.textContent = `
            .philosophy-text, .heritage-text, .experience-card {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .philosophy-text.animate-in, .heritage-text.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .experience-card {
                transition-delay: 0.1s;
            }
            
            .experience-card:nth-child(2) {
                transition-delay: 0.2s;
            }
            
            .experience-card:nth-child(3) {
                transition-delay: 0.3s;
            }
        `;
        document.head.appendChild(style);
    }
}

// ✨ SMOOTH SCROLL NAVIGATION
class SmoothScrollNavigation {
    constructor() {
        this.init();
    }
    
    init() {
        // Enhanced smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    // Add smooth scroll with offset for fixed navbar
                    const navbarHeight = 60;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Add subtle flash effect to target section
                    target.style.transform = 'scale(1.01)';
                    setTimeout(() => {
                        target.style.transform = 'scale(1)';
                    }, 300);
                }
            });
        });
        
        // Add scroll progress indicator
        this.createScrollProgress();
    }
    
    createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--highlight-color), var(--coffee-accent));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
}

// ✨ PREMIUM HOVER EFFECTS
class PremiumHoverEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupImageHovers();
        this.setupCardHovers();
        this.setupButtonEffects();
    }
    
    setupImageHovers() {
        document.querySelectorAll('.hero-image, .vintage-frame img').forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.02)';
                img.style.filter = 'brightness(1.1)';
            });
            
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
                img.style.filter = 'brightness(1)';
            });
        });
    }
    
    setupCardHovers() {
        document.querySelectorAll('.stat-item').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    setupButtonEffects() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
                btn.style.boxShadow = 'var(--shadow-hover)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = 'var(--shadow)';
            });
        });
    }
}

// ✨ INITIALIZE ALL ELEGANT SYSTEMS
const elegantInteractions = new ElegantInteractions();
const scrollAnimations = new ElegantScrollAnimations();
const smoothScrollNav = new SmoothScrollNavigation();
const hoverEffects = new PremiumHoverEffects();

console.log('✨ ELEGANT COFFEE WEBSITE ACTIVATED! ☕');
console.log('🎭 Smooth section transitions activated!');
console.log('🌟 Sophisticated scroll animations!');
console.log('⭐ Premium navigation with progress bar!');
console.log('🚀 Staggered element reveals!'); 