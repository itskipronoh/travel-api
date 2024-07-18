const express = require('express');
const {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking
} = require('../controllers/BookingController');

const router = express.Router();
router.post('/', createBooking);
router.get('/', getBookings);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
