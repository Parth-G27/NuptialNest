import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';  

const AutoIncrement = AutoIncrementFactory(mongoose);

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    email: { type: String, required: true },
    time: { type: String, required: true },  
    category: { type: String, required: true},
    user_review: { type: String, required: true }
});

// Apply the plugin to auto-increment the `reviewId` field
reviewSchema.plugin(AutoIncrement, { inc_field: 'reviewId' });

const Review = mongoose.model('reviews', reviewSchema);

export default Review;
