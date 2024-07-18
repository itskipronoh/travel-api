const express = require('express');
const { getAllDestinations, createDestination, getDestinationById,
    updateDestination,
    deleteDestination } = require('../controllers/DestinationController');
const router = express.Router();

router.get('/', getAllDestinations);
router.post('/', createDestination);
router.get('/:id', getDestinationById);
router.put('/:id', updateDestination);
router.delete('/:id', deleteDestination);


module.exports = router;
