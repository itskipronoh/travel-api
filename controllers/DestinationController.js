const Destination = require('../models/DestinationModel');

const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Get a single destination by ID
const getDestinationById = async (req, res) => {
    try {
        const { id } = req.params;
        const destination = await Destination.findById(id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a destination
const updateDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const destination = await Destination.findByIdAndUpdate(id, req.body, { new: true });
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a destination
const deleteDestination = async (req, res) => {
    try {
        const { id } = req.params;
        const destination = await Destination.findByIdAndDelete(id);
        if (!destination) {
            return res.status(404).json({ message: 'Destination not found' });
        }
        res.status(200).json({ message: 'Destination deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createDestination = async (req, res) => {
    try {
        const { name, description, location, imageUrl } = req.body;
        const destination = await Destination.create({ name, description, location, imageUrl });
        res.status(201).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllDestinations, createDestination, getDestinationById,
    updateDestination,
    deleteDestination };
