const budgetRoutes = require('./routes/budget.routes');

const router = app => {
    app.use('/api/movements', budgetRoutes);
};

module.exports = router;