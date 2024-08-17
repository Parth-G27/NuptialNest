// http://localhost:8000/

import axios from "axios";

const reviewsUrl = 'http://localhost:8000';

export const apiAddReviews = async (data) => {
    try {
        return await axios.post(`${reviewsUrl}/add`, data);
    } catch (error) {
        console.log("Error while calling add review API", error);
    }
}

