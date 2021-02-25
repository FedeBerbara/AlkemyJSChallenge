const Budget = require('../models/Budget');

const createOperation = async data => {
    const budgetData = new Budget({
        concept: data.concept,
        amount: data.amount,
        type: data.type,
    });

    return await budgetData.save();
};

const editOperation = async ( id, data ) => {
    return await Budget.findByIdAndUpdate( id, data, {
        useFindAndModify: false,
    });
};

const deleteOperation = async id => await Budget.findByIdAndDelete( id );

const getOperation = async id => await Budget.findById( id );

const getOperations = async () => await Budget.find();

const getOperationsSorted = async () => {
    return await Budget.find().sort({
        date: -1
    }).limit(10);
};

const getOperationsSortedByType = async movementType => {
    return await Budget.find({
        type: movementType
    }).sort({
        date: -1
    });
}

const getBalance = async () => {};

module.exports = {
    createOperation,
    editOperation,
    deleteOperation,
    getOperation,
    getOperations,
    getOperationsSorted,
    getOperationsSortedByType,
    getBalance,
}