// TMW Website - Main JavaScript
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navAuth = document.querySelector('.nav-auth');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            // Toggle mobile menu visibility
            if (window.innerWidth <= 992) {
                if (navMenu.style.display === 'flex') {
                    navMenu.style.display = 'none';
                    navAuth.style.display = 'none';
                } else {
                    navMenu.style.display = 'flex';
                    navAuth.style.display = 'flex';
                    
                    // Position them properly
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.right = '0';
                    navMenu.style.backgroundColor = 'var(--bg-card)';
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.padding = '1rem';
                    navMenu.style.borderRadius = 'var(--radius-md)';
                    navMenu.style.boxShadow = 'var(--shadow-lg)';
                    navMenu.style.zIndex = '1000';
                    
                    // Style for mobile
                    navAuth.style.position = 'absolute';
                    navAuth.style.top = 'calc(100% + 200px)';
                    navAuth.style.left = '0';
                    navAuth.style.right = '0';
                    navAuth.style.backgroundColor = 'var(--bg-card)';
                    navAuth.style.flexDirection = 'column';
                    navAuth.style.padding = '1rem';
                    navAuth.style.borderRadius = 'var(--radius-md)';
                    navAuth.style.boxShadow = 'var(--shadow-lg)';
                    navAuth.style.zIndex = '1000';
                    navAuth.style.gap = '0.5rem';
                }
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container') && window.innerWidth <= 992) {
            navMenu.style.display = 'none';
            navAuth.style.display = 'none';
        }
    });
    
    // Update stats with animation
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count')) || parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const current = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const increment = Math.ceil(target / 100);
            let currentValue = current;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= target) {
                    currentValue = target;
                    clearInterval(timer);
                }
                stat.textContent = currentValue.toLocaleString() + '+';
            }, 20);
        });
    }
    
    // Start animation when hero section is in view
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(heroSection);
    }
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.live-card, .talent-card, .category-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = 'var(--shadow-xl)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
    
    // Live dot animation
    const liveDots = document.querySelectorAll('.live-dot');
    liveDots.forEach(dot => {
        setInterval(() => {
            dot.style.opacity = dot.style.opacity === '0.5' ? '1' : '0.5';
        }, 750);
    });
    
    // Shine animation for subscribe button
    const subscribeBtn = document.querySelector('.nav-subscribe');
    if (subscribeBtn) {
        setInterval(() => {
            subscribeBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                subscribeBtn.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SUBSCRIBING...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> SUBSCRIBED!';
                alert('Thank you for subscribing to TMW updates!');
                
                // Reset form
                this.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // View all live click
    const viewAllBtn = document.querySelector('.view-all');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Smooth scroll to live page or simulate
            window.location.href = 'live.html';
        });
    }
    
    // Support contact functionality
    const supportItems = document.querySelectorAll('.support-item');
    supportItems.forEach(item => {
        item.addEventListener('click', function() {
            const type = this.querySelector('.support-details h4').textContent;
            const value = this.querySelector('.support-details p').textContent;
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            console.log(`Contact ${type}: ${value}`);
        });
    });
    
    // Window resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navMenu.style.display = '';
            navAuth.style.display = '';
            navMenu.style.position = '';
            navMenu.style.top = '';
            navMenu.style.left = '';
            navMenu.style.right = '';
            navMenu.style.backgroundColor = '';
            navMenu.style.flexDirection = '';
            navMenu.style.padding = '';
            navMenu.style.borderRadius = '';
            navMenu.style.boxShadow = '';
            
            navAuth.style.position = '';
            navAuth.style.top = '';
            navAuth.style.left = '';
            navAuth.style.right = '';
            navAuth.style.backgroundColor = '';
            navAuth.style.flexDirection = '';
            navAuth.style.padding = '';
            navAuth.style.borderRadius = '';
            navAuth.style.boxShadow = '';
            navAuth.style.gap = '';
        }
    });
});

// Global functions for contact actions
function contactWhatsApp() {
    window.open('https://wa.me/255765206238?text=Hello%20TMW%20Support', '_blank');
}

function contactCall() {
    window.location.href = 'tel:+255704557858';
}

function contactEmail() {
    window.location.href = 'mailto:platformtmw@gmail.com?subject=TMW%20Support%20Inquiry&body=Hello%20TMW%20Team,%0A%0AI%20would%20like%20to%20inquire%20about...';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});