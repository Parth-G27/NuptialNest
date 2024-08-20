import axios from "axios";

const reviewsUrl = 'http://localhost:8000';

export const apiDeleteReviews = async (id) => {
    try {
        return await axios.delete(`${reviewsUrl}/del/${id}`);
       
    } catch (error) {
        console.log("Error while calling get delete API", error);
    }
}

  
