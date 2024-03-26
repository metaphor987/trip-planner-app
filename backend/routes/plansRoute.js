import express from 'express';
import { Plan } from '../models/planModel.js';

const router = express.Router();

// Get All Plans
// tested
router.get('/', async (req, res) => {
    try {
      const plans = await Plan.find({});
  
      return res.status(200).json({
        count: plans.length,
        data: plans,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  // Get one plan by id
  // tested
  // the default id is so long, how can we have automatically increased id like mysql?
  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const plan = await Plan.findById(id);
  
      return res.status(200).json(plan);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

// Add a new Plan
// tested
// id problem and dates list is empty Date() problem
router.post('/add', async (req, res) => {
  try {
    const newPlan = {
      date: req.body.date,
      destination: req.body.destination,
      schedule: req.body.schedule,
      totalCost: req.body.totalCost,
    };
    const plan = await Plan.create(newPlan);

    return res.status(201).send(plan);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Edit a plan
// tested
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Plan.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    return res.status(200).send({ message: 'Plan updated successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete a plan
// tested
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Plan.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    return res.status(200).send({ message: 'Plan deleted successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;