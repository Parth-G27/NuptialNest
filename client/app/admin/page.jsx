"use client";
import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, useMediaQuery, useTheme, Box, Typography } from '@mui/material';
import { apiAllReviews } from '../api/apiAllReview/route';
import { apiDeleteReviews } from '../api/apiDeleteReview/route'; // Ensure correct import
import Link from 'next/link';

const StyledTable = styled(Table)(({ theme }) => ({
    width: '90%',
    margin: '50px auto',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: '20px 0',
    }
}));

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
        text-align: center;
    }
`;

const TRow = styled(TableRow)(({ theme }) => ({
    '& > td': {
        fontSize: '18px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
    }
}));

const ReviewText = styled(Typography)(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '500px',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100px',
    },
}));

const AllUsers = () => {
    const [reviews, setReviews] = useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        getAllReviews();
    }, []);

    const getAllReviews = async () => {
        let response = await apiAllReviews();
        setReviews(response.data);
    };

    const deleteUserData = async (id) => {
       
        await apiDeleteReviews(id); // Ensure correct function call
        getAllReviews(); // Optionally refetch data to update the table after deletion
    };

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Review</TableCell>
                    <TableCell>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {reviews.map((review, index) => (
                    <TRow key={index}>
                        <TableCell>{review.reviewId}</TableCell>
                        <TableCell>{review.title}</TableCell>
                        <TableCell>{review.email}</TableCell>
                        <TableCell>{review.category}</TableCell>
                        <TableCell>
                            <ReviewText title={review.user_review}>{review.user_review}</ReviewText>
                        </TableCell>
                        <TableCell>
                            <Box display="flex" justifyContent="center" alignItems="center" gap={isMobile ? '0.5rem' : '1rem'}>
                                <Link href={`/edit/${review.reviewId}`} passHref>
                                    <Button color="primary" variant="contained" style={{ marginRight: isMobile ? 5 : 10 }}>
                                        Edit
                                    </Button>
                                </Link>
                                
                                <Button color="secondary" variant="contained" onClick={() => deleteUserData(review.reviewId)}>
                                    Delete
                                </Button>
                            </Box>
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    );
};

export default AllUsers;
