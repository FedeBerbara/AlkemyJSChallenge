const budgetServices = require('../services/budgetServices');

const createMovement = async (req, res) => {

    let data = req.body

    try {
        const newMovement = await budgetServices.createOperation(data);
        res.status(201).send( newMovement )
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
};

const editMovement = async (req, res) => {

    let data = req.body;
    let movementEdited;

    try {
        movementEdited = await budgetServices.editOperation(req.params.id, data);
        res.status(200).json({
            message: "Movement modified successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const eraseMovement = async (req, res) => {

    let deletedMovement; 

    try {
        deletedMovement = await budgetServices.deleteOperation(req.params.id);
        res.status(200).json({
            message: "Movement deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMovementsSorted = async (req, res) => {

    try {
        const movementsSorted = await budgetServices.getOperationsSorted();
        res.status(200).send( movementsSorted );
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getAllMovements = async (req, res) => {

    try {
        const allMovements = await budgetServices.getOperations();
        res.status(200).send( allMovements );
    } catch (error) {
        res.status(500).json({
            message: error.message
        });      
    }
}

const getMovement = async (req, res) => {

    try {
        const movement = await budgetServices.getOperation(req.params.id);
        res.status(200).send( movement )
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMovementsByType = async (req, res) => {

    let movementType = req.params.type;

    try {
        movementType = await budgetServices.getOperationsSortedByType(movementType);
        res.status(200).send( movementType );
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createMovement,
    editMovement,
    eraseMovement,
    getMovementsSorted,
    getMovement,
    getAllMovements,
    getMovementsByType,
}