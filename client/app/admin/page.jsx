"use client";
import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material';
import { apiAllReviews } from '../api/apiAllReview/route';
import Link from 'next/link';  // Use Next.js Link

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px;
    }
`;

const AllUsers = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getAllReviews();
    }, []);

    const getAllReviews = async () => {
        let response = await apiAllReviews();   
        setReviews(response.data);
    };

    const deleteUserData = async (id) => {
        // Code to delete the review
    };

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Review</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {reviews.map((review) => (
                    <TRow key={review.id}>
                        <TableCell>{review.reviewId}</TableCell>
                        <TableCell>{review.name}</TableCell>
                        <TableCell>{review.email}</TableCell>
                        <TableCell>{review.user_review}</TableCell>
                        <TableCell>
                            <Link href={`/edit/${review.reviewId}`} passHref>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }}>Edit</Button>
                            </Link>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(review._id)}>Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    );
};

export default AllUsers;
