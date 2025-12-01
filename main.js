// TMW Website - Netflix Style JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navRight = document.querySelector('.nav-right');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                if (navMenu.style.display === 'flex') {
                    navMenu.style.display = 'none';
                    navRight.style.display = 'none';
                } else {
                    navMenu.style.display = 'flex';
                    navRight.style.display = 'flex';
                    
                    // Style for mobile
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.right = '0';
                    navMenu.style.backgroundColor = 'var(--netflix-dark)';
                    navMenu.style.padding = '1rem';
                    navMenu.style.zIndex = '1000';
                    
                    navRight.style.flexDirection = 'column';
                    navRight.style.position = 'absolute';
                    navRight.style.top = 'calc(100% + 150px)';
                    navRight.style.left = '0';
                    navRight.style.right = '0';
                    navRight.style.backgroundColor = 'var(--netflix-dark)';
                    navRight.style.padding = '1rem';
                    navRight.style.zIndex = '1000';
                    navRight.style.gap = '0.5rem';
                }
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container') && window.innerWidth <= 992) {
            navMenu.style.display = 'none';
            navRight.style.display = 'none';
        }
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Play button animation
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Simulate play action
            const card = this.closest('.card');
            const title = card.querySelector('.card-title').textContent;
            alert(`Now playing: ${title}`);
        });
    });

    // Category item animation
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.category-arrow');
            arrow.style.transform = 'translateX(5px)';
            arrow.style.color = 'var(--netflix-red)';
        });

        item.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.category-arrow');
            arrow.style.transform = 'translateX(0)';
            arrow.style.color = 'var(--netflix-gray)';
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');
            
            if (!emailInput.value || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate submission
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i>';
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

    // Support item click handlers
    const supportItems = document.querySelectorAll('.support-item');
    supportItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Window resize handler
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navMenu.style.display = '';
            navRight.style.display = '';
            navMenu.style.flexDirection = '';
            navMenu.style.position = '';
            navMenu.style.top = '';
            navMenu.style.left = '';
            navMenu.style.right = '';
            navMenu.style.backgroundColor = '';
            navMenu.style.padding = '';
            
            navRight.style.flexDirection = '';
            navRight.style.position = '';
            navRight.style.top = '';
            navRight.style.left = '';
            navRight.style.right = '';
            navRight.style.backgroundColor = '';
            navRight.style.padding = '';
            navRight.style.gap = '';
        }
    });

    // Auto-play live pulse animation
    const liveIndicators = document.querySelectorAll('.live-indicator, .live-pulse');
    liveIndicators.forEach(indicator => {
        setInterval(() => {
            indicator.style.opacity = indicator.style.opacity === '0.5' ? '1' : '0.5';
        }, 750);
    });

    // Shine animation for subscribe button
    const subscribeBtn = document.querySelector('.subscribe-item');
    if (subscribeBtn) {
        setInterval(() => {
            subscribeBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                subscribeBtn.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    }
});

// Contact functions
function contactWhatsApp() {
    window.open('https://wa.me/255765206238?text=Hello%20TMW%20Support%2C%20I%20need%20assistance', '_blank');
}

function contactCall() {
    window.location.href = 'tel:+255704557858';
}

function contactEmail() {
    window.location.href = 'mailto:platformtmw@gmail.com?subject=TMW%20Support%20Request&body=Hello%20TMW%20Team%2C%0A%0AI%20would%20like%20to%20get%20assistance%20regarding...';
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

// Card click simulation
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.play-button')) {
            const title = this.querySelector('.card-title')?.textContent || 'Content';
            console.log(`Viewing: ${title}`);
        }
    });
});