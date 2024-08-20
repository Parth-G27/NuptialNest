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

        console.log(req.body);
        const updatedReview = req.body;
        const ID = updatedReview.reviewId;
        const newName = updatedReview.name;
        const newEmail = updatedReview.email;
        const newUserReview = updatedReview.user_review;

        await Review.updateOne(
            { reviewId: ID }, // Filter criteria
            { $set: { name: newName,
                      email: newEmail,
                      user_review : newUserReview
             } } // Update operation
         )
        res.status(200).json("Edit working. x2");

    } catch (error) {
        res.status(404).json({ message: error.message});
    }
    
})

router.delete('/del', async (req, res) => {

    try {

        const message = req.body;
        const delID = message.data;
        const result = await Review.deleteOne({ reviewId: delID });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No review found with the given ID" });
        }

        res.status(200).json({ message: "Review deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
    
})

router.delete('/de', async (req, res) => {

    try {

        const message = req.body; // Access the body from the DELETE request
        const delID = message.Id;
        const delID2 = message.data;
        console.log(delID);
        console.log("two",delID2);
        // console.log(message);
        // console.log(req);
        // const result = await Review.deleteOne({ reviewId: delID });

        // if (result.deletedCount === 0) {
        //     return res.status(404).json({ message: "No review found with the given ID" });
        // }

        res.status(200).json({ message: "Review successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
    
})

export default router;