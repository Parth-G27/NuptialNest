import axios from "axios";

const reviewsUrl = 'http://localhost:8000';

export const apiAllReviews = async () => {
    try {
        return await axios.get(`${reviewsUrl}/all`) 
    } catch (error) {
        console.log("Error while calling get all reviews API", error);
    }
}
