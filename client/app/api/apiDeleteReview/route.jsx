import axios from "axios";

const reviewsUrl = 'http://localhost:8000';

export const apiDeleteReviews = async (data) => {
    try {
        console.log("Trying /del", data);
        return await axios.delete(`${reviewsUrl}/de`, {
            data: data // Include the body data here
        }); 
    } catch (error) {
        console.log("Error while calling get delete API", error);
    }
}

  
