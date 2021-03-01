const budgetRoutes = require('./routes/budget.routes');
const userRoutes = require('./routes/users.routes');

const router = app => {
    app.use('/api/movements', budgetRoutes);
    app.use('/api/user', userRoutes);
};

module.exports = router;