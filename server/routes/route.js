import Review from '../models/review.js';

import express, {Router} from 'express';



const router = express.Router();

router.post('/add', async (req, res) => {

    const review = req.body;
    console.log(review);
    const newReview = new Review(review);

    try {
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(409).json({ message: error.message});
       
    }
})

export default router;