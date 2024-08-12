const express = require('express');
const router = express.Router();
const Travel = require('../models/Travel');

// GET all activities for a specific state
router.get('/:state', async (req, res) => {
    try {
        const travel = await Travel.findOne({ state: req.params.state });
        if (travel) {
            res.json(travel.activities);
        } else {
            res.status(404).json({ message: 'State not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new activities for a state
router.post('/', async (req, res) => {
    const { state, activities } = req.body;

    const travel = new Travel({
        state,
        activities
    });

    try {
        const newTravel = await travel.save();
        res.status(201).json(newTravel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
