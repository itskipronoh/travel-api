const express = require('express');
const { getAllDestinations, createDestination } = require('../controllers/DestinationController');
const router = express.Router();

router.get('/', getAllDestinations);
router.post('/', createDestination);

module.exports = router;
