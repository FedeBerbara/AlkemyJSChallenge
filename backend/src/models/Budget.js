const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
    concept: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
}, {
    timestamps: true,
    collection: 'Budgets'
});

module.exports = mongoose.model('Budgets', budgetSchema);