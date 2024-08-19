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

router.get('/all', async (req, res) => {

    try {

        const reviews = await Review.find({}).sort({ reviewId: -1 });
        res.status(200).json(reviews)

    } catch (error) {
        res.status(404).json({ message: error.message});
    }
    
})

router.put('/edit', async (req, res) => {

    try {

        await Review.updateOne(
            { reviewId: 6 }, // Filter criteria
            { $set: { name: "New Name" } } // Update operation
         )
        res.status(200).json("Done. Edit");

    } catch (error) {
        res.status(404).json({ message: error.message});
    }
    
})

export default router;