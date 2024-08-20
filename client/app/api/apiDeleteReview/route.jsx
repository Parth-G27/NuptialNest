import axios from "axios";

const reviewsUrl = 'http://localhost:8000';

export const apiDeleteReviews = async (data) => {
    try {
        return await axios.delete(`${reviewsUrl}/delete`, data) 
    } catch (error) {
        console.log("Error while calling get delete API", error);
    }
}

  
