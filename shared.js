// TMW Platform - Shared Data and Functions
const TMW_CONFIG = {
    admin: {
        username: 'talentweb',
        password: 'goalmoney'
    },
    payments: {
        mobileMoney: '0704557858',
        whatsapp: '0765206238',
        email: 'platformtmw@gmail.com'
    },
    subscriptions: {
        bronze: 3000,
        silver: 8000,
        gold: 15000
    },
    verificationFees: {
        musician: 25000,
        vj: 30000,
        dj: 25000,
        movie_maker: 35000
    }
};

// Navigation data
const TMW_NAVIGATION = {
    pages: [
        { name: "Home", url: "index.html", icon: "🏠" },
        { name: "Browse Talents", url: "browse_talent.html", icon: "👥" },
        { name: "Live", url: "live.html", icon: "🔴" },
        { name: "For Talents", url: "for_talent.html", icon: "🎯" },
        { name: "Subscribe", url: "subscribe.html", icon: "💎" }
    ]
};

// Global data storage
const TMW_DATA = {
    talents: [],
    applications: [],
    subscriptions: [],
    users: []
};

// Initialize all data
function initializeData() {
    // Initialize talents if not exists
    if (!localStorage.getItem('tmwTalents')) {
        const initialTalents = [
            {
                id: 1,
                name: "VJ Pro Mark",
                category: "vj",
                specialty: "Wedding & Event Coverage",
                location: "Kampala",
                rating: 5,
                price: "From 500,000 UGX",
                icon: "🎥",
                verified: true,
                featured: true
            },
            {
                id: 2,
                name: "Sheebah",
                category: "musician",
                specialty: "Afrobeat Artist",
                location: "Kampala", 
                rating: 5,
                price: "From 2,000,000 UGX",
                icon: "🎵",
                verified: true,
                featured: true
            },
            {
                id: 3,
                name: "DJ Erycom",
                category: "dj",
                specialty: "Club Mix Specialist", 
                location: "Kampala",
                rating: 5,
                price: "From 800,000 UGX",
                icon: "🎧",
                verified: true,
                featured: true
            },
            {
                id: 4,
                name: "Film Factory UG",
                category: "movie_maker",
                specialty: "Short Films & Series",
                location: "Kampala",
                rating: 4,
                price: "From 1,500,000 UGX", 
                icon: "🎬",
                verified: true,
                featured: true
            },
            {
                id: 5,
                name: "Eddy Kenzo",
                category: "musician",
                specialty: "International Star",
                location: "Kampala",
                rating: 5,
                price: "From 3,000,000 UGX",
                icon: "🎵",
                verified: true,
                featured: true
            },
            {
                id: 6,
                name: "Cinema Masters",
                category: "vj",
                specialty: "Music Video Production",
                location: "Entebbe", 
                rating: 4,
                price: "From 600,000 UGX",
                icon: "🎥",
                verified: true,
                featured: false
            },
            {
                id: 7,
                name: "DJ Slick",
                category: "dj",
                specialty: "Wedding Specialist",
                location: "Wakiso",
                rating: 4,
                price: "From 400,000 UGX",
                icon: "🎧",
                verified: true,
                featured: false
            },
            {
                id: 8, 
                name: "Kampala Stories",
                category: "movie_maker",
                specialty: "Documentary Series",
                location: "Kampala",
                rating: 5,
                price: "From 2,000,000 UGX",
                icon: "🎬",
                verified: true,
                featured: true
            },
            {
                id: 9,
                name: "Vinka",
                category: "musician", 
                specialty: "Dancehall Queen",
                location: "Kampala",
                rating: 4,
                price: "From 1,500,000 UGX",
                icon: "🎵",
                verified: true,
                featured: true
            },
            {
                id: 10,
                name: "Event Capture UG",
                category: "vj",
                specialty: "Corporate Events",
                location: "Kampala",
                rating: 5,
                price: "From 750,000 UGX", 
                icon: "🎥",
                verified: true,
                featured: false
            },
            {
                id: 11,
                name: "DJ Mosh",
                category: "dj",
                specialty: "Radio Personality",
                location: "Kampala",
                rating: 5,
                price: "From 900,000 UGX",
                icon: "🎧",
                verified: true,
                featured: false
            },
            {
                id: 12,
                name: "Uganda Cinema",
                category: "movie_maker",
                specialty: "Feature Films", 
                location: "Kampala",
                rating: 4,
                price: "From 2,500,000 UGX",
                icon: "🎬",
                verified: true,
                featured: true
            }
        ];
        localStorage.setItem('tmwTalents', JSON.stringify(initialTalents));
    }
    
    // Load all data from localStorage
    TMW_DATA.talents = JSON.parse(localStorage.getItem('tmwTalents')) || [];
    TMW_DATA.applications = JSON.parse(localStorage.getItem('tmwApplications')) || [];
    TMW_DATA.subscriptions = JSON.parse(localStorage.getItem('tmwSubscriptions')) || [];
    TMW_DATA.users = JSON.parse(localStorage.getItem('tmwUsers')) || [];
}

// Get applications from storage
function getApplications() {
    return JSON.parse(localStorage.getItem('tmwApplications')) || [];
}

// Save applications to storage
function saveApplications(applications) {
    localStorage.setItem('tmwApplications', JSON.stringify(applications));
    TMW_DATA.applications = applications;
}

// Add new application
function addApplication(application) {
    const applications = getApplications();
    const newApp = {
        id: Date.now(),
        ...application,
        status: 'pending',
        date: new Date().toLocaleString('en-UG'),
        adminNotes: '',
        reviewed: false
    };
    applications.push(newApp);
    saveApplications(applications);
    return newApp.id;
}

// Get talents by category
function getTalentsByCategory(category = 'all') {
    if (category === 'all') return TMW_DATA.talents;
    return TMW_DATA.talents.filter(talent => talent.category === category);
}

// Get featured talents
function getFeaturedTalents() {
    return TMW_DATA.talents.filter(talent => talent.featured);
}

// Search talents
function searchTalents(query) {
    if (!query) return TMW_DATA.talents;
    
    const searchTerm = query.toLowerCase();
    return TMW_DATA.talents.filter(talent => 
        talent.name.toLowerCase().includes(searchTerm) ||
        talent.specialty.toLowerCase().includes(searchTerm) ||
        talent.location.toLowerCase().includes(searchTerm)
    );
}

// Filter talents with multiple criteria
function filterTalents(filters = {}) {
    let filtered = TMW_DATA.talents;
    
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(talent => talent.category === filters.category);
    }
    
    if (filters.location) {
        filtered = filtered.filter(talent => talent.location.toLowerCase() === filters.location.toLowerCase());
    }
    
    if (filters.rating) {
        filtered = filtered.filter(talent => talent.rating >= parseInt(filters.rating));
    }
    
    if (filters.search) {
        filtered = searchTalents(filters.search);
    }
    
    return filtered;
}

// Format money
function formatMoney(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' UGX';
}

// Get category name
function getCategoryName(category) {
    const categories = {
        'musician': 'Musician/Artist',
        'vj': 'Professional VJ', 
        'dj': 'DJ',
        'movie_maker': 'Movie Maker'
    };
    return categories[category] || category;
}

// Mobile menu function
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Initialize navigation on page
function initializeNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    nav.innerHTML = `
        <div class="logo">🎬 TMW _ TALENT MEDIA WORKS</div>
        <div class="mobile-menu" onclick="toggleMobileMenu()">☰</div>
        <div class="nav-links">
            ${TMW_NAVIGATION.pages.map(page => 
                `<a href="${page.url}" ${currentPage === page.url ? 'class="active"' : ''}>
                    ${page.icon} ${page.name}
                </a>`
            ).join('')}
            <a href="subscribe.html" class="subscribe-btn">Subscribe</a>
        </div>
    `;
}

// Show alert message
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 4px;
        color: white;
        z-index: 10000;
        font-weight: bold;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    const colors = {
        success: '#00CC66',
        error: '#E50914',
        warning: '#FF9900',
        info: '#1A1A1A'
    };
    
    alertDiv.style.backgroundColor = colors[type] || colors.info;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 300);
    }, 3000);
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Ugandan phone number
function isValidUgandanPhone(phone) {
    const phoneRegex = /^(07[0-9]{8})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Validate URL
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Open WhatsApp
function openWhatsApp(message = 'Hello TMW! I need more information.') {
    window.open(`https://wa.me/256765206238?text=${encodeURIComponent(message)}`, '_blank');
}

// Open phone dialer
function openPhoneDialer() {
    window.open('tel:0704557858', '_blank');
}

// Open email
function openEmail() {
    window.open('mailto:platformtmw@gmail.com', '_blank');
}

// Get verification fee for category
function getVerificationFee(category) {
    return TMW_CONFIG.verificationFees[category] || 30000;
}

// Check if user is admin (for admin pages)
function checkAdminAuth() {
    const isAuthenticated = sessionStorage.getItem('tmwAdminAuthenticated');
    if (!isAuthenticated && window.location.pathname.includes('admin.html')) {
        window.location.href = 'index.html';
    }
    return !!isAuthenticated;
}

// Admin login
function adminLogin(username, password) {
    if (username === TMW_CONFIG.admin.username && password === TMW_CONFIG.admin.password) {
        sessionStorage.setItem('tmwAdminAuthenticated', 'true');
        return true;
    }
    return false;
}

// Admin logout
function adminLogout() {
    sessionStorage.removeItem('tmwAdminAuthenticated');
    window.location.href = 'index.html';
}

// Get stats for admin dashboard
function getAdminStats() {
    const applications = getApplications();
    const pendingApps = applications.filter(app => app.status === 'pending');
    const approvedTalents = TMW_DATA.talents.filter(talent => talent.verified);
    
    return {
        totalApplications: applications.length,
        pendingApplications: pendingApps.length,
        verifiedTalents: approvedTalents.length,
        totalRevenue: calculateTotalRevenue(),
        recentActivity: getRecentActivity()
    };
}

// Calculate total revenue (simulated)
function calculateTotalRevenue() {
    // This would connect to your payment system
    const subscriptions = TMW_DATA.subscriptions.length;
    const verifications = TMW_DATA.talents.filter(t => t.verified).length;
    
    return (subscriptions * 5000) + (verifications * 25000); // Sample calculation
}

// Get recent activity
function getRecentActivity() {
    const applications = getApplications();
    return applications
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    initializeNavigation();
    
    // Add CSS for alerts if not exists
    if (!document.querySelector('#tmw-alert-styles')) {
        const style = document.createElement('style');
        style.id = 'tmw-alert-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
});

// Export for use in other modules (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TMW_CONFIG,
        TMW_NAVIGATION,
        TMW_DATA,
        initializeData,
        getApplications,
        addApplication,
        getTalentsByCategory,
        searchTalents,
        filterTalents,
        formatMoney,
        getCategoryName,
        toggleMobileMenu,
        initializeNavigation,
        showAlert,
        isValidEmail,
        isValidUgandanPhone,
        isValidUrl,
        openWhatsApp,
        openPhoneDialer,
        openEmail,
        getVerificationFee,
        checkAdminAuth,
        adminLogin,
        adminLogout,
        getAdminStats
    };
}