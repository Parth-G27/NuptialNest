import axios from "axios";



export const apiEditReviews = async (data) => {
    try {
        const reviewsUrl = process.env.NEXT_PUBLIC_API_KEY;
        
        return await axios.put(`${reviewsUrl}/edit`, data) 
    } catch (error) {
        console.log("Error while calling get Edit API", error);
    }
}
