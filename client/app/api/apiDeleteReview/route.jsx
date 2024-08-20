import axios from "axios";



export const apiDeleteReviews = async (id) => {
    try {
        const reviewsUrl = process.env.NEXT_PUBLIC_API_KEY;
        
        return await axios.delete(`${reviewsUrl}/del/${id}`);
       
    } catch (error) {
        console.log("Error while calling get delete API", error);
    }
}

  
