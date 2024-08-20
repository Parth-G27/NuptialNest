import axios from "axios";


export const apiAllReviews = async () => {
    try {
        const reviewsUrl = process.env.NEXT_PUBLIC_API_KEY;
        
        return await axios.get(`${reviewsUrl}/all`) 
    } catch (error) {
        console.log("Error while calling get all reviews API", error);
    }
}
