// http://localhost:3000/api/apiAddReview

import axios from "axios";

const reviewsUrl = 'http://localhost:3000/api/apiAddReview';

export const apiAddReviews = async (data) => {
    try {
        return await axios.post(`${reviewsUrl}/add`, data);
    } catch (error) {
        console.log("Error while calling add review API", error);
    }
}
