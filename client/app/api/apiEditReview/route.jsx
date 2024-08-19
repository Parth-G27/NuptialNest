import axios from "axios";

const reviewsUrl = 'http://localhost:8000';

export const apiEditReviews = async (data) => {
    try {
        return await axios.put(`${reviewsUrl}/edit`, data) 
    } catch (error) {
        console.log("Error while calling get Edit API", error);
    }
}
