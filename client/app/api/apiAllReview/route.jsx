import axios from "axios";

const reviewsUrl = 'http://localhost:8000';

export const apiAllReviews = async () => {
    try {
        console.log("Trying apiAllReviews !")
        return await axios.post(`${reviewsUrl}/all`) 
    } catch (error) {
        console.log("Error while calling get all reviews API", error);
    }
}
