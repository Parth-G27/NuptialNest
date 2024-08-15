"use client";

import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
// import { addreview } from '../Service/api';

import { apiAddReviews } from '../api/apiAddReview/route';

const initialValue = {
    name: '',
    email: '',
    user_review: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddReview = () => {


    const [review, setreview] = useState(initialValue);
    const { name, email, user_review } = review;
    

    const onValueChange = (e) => {
        setreview({...review, [e.target.name]: e.target.value})
    }

    const addReviewDetails = async() => {
        await apiAddReviews(review);
        console.log(review)
        // navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Review</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">reviewname</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='reviewname' value={reviewname} id="my-input" />
            </FormControl> */}
            <FormControl>
                <InputLabel htmlFor="my-input">Email ID</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Your Review</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='user_review' value={user_review} id="my-input" />
            </FormControl>

            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addReviewDetails()}>Add Review</Button>
            </FormControl>
        </Container>
    )
}

export default AddReview;