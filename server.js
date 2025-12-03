

// server.js - TMW Backend
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// API: Health Check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        time: new Date().toISOString(),
        message: 'TMW Server Running'
    });
});

// API: Check Subscription
app.get('/api/subscription/:id', (req, res) => {
    res.json({
        active: true,
        plan: 'monthly',
        expiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        daysLeft: 28
    });
});

// API: Subscribe
app.post('/api/subscribe', (req, res) => {
    const { plan, phone } = req.body;
    
    // Prices in UGX
    const prices = { daily: 2000, weekly: 5000, monthly: 15000, yearly: 120000 };
    const amount = prices[plan] || 0;
    
    res.json({
        success: true,
        message: `Send ${amount} UGX to Airtel Money: 0704557858`,
        plan: plan,
        amount: amount,
        airtel: '0704557858',
        contact: '0760206538'
    });
});

// API: Talent Registration
app.post('/api/talent/register', (req, res) => {
    res.json({
        success: true,
        message: 'Pay 20,000 UGX to register as talent',
        fee: 20000,
        airtel: '0704557858',
        contact: '0760206538',
        note: 'After payment, we will verify your talent'
    });
});

// API: Validate Voucher
app.post('/api/voucher/validate', (req, res) => {
    const { code } = req.body;
    
    if (code && code.startsWith('TMW-')) {
        res.json({ valid: true, value: 15000, plan: 'monthly' });
    } else {
        res.json({ valid: false, message: 'Invalid code' });
    }
});

// API: Submit Booking
app.post('/api/bookings', (req, res) => {
    res.json({
        success: true,
        message: 'Booking request received. We will contact you.',
        reference: 'BOOK-' + Date.now(),
        contact: '0760206538'
    });
});

// Serve HTML for all routes
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 TMW Server: http://localhost:${PORT}`);
    console.log(`📞 Support: 0760206538`);
    console.log(`💰 Payment: 0704557858`);
});