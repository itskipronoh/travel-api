const Destination = require('../models/DestinationModel');

const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
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

module.exports = { getAllDestinations, createDestination };
