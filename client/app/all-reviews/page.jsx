"use client";
import react, { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { apiAllReviews } from '../api/apiAllReview/route';

import { Link } from 'react-router-dom';

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
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [reviews, setreviews] = useState([])


    
    useEffect(() => {
        getAllReviews();
    }, []);

    // Empty Array in useEffect means component-did-mount

    // const deleteUserData = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }

    const getAllReviews = async () => {
        let response = await apiAllReviews();   
        setreviews(response.data);
    }

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
                        <TableCell>{review.reviewId}</TableCell> {/* change it to review.id to use JSON Server */}
                        <TableCell>{review.name}</TableCell>
 
                        <TableCell>{review.email}</TableCell>
                        <TableCell>{review.user_review}</TableCell>
                        {/* <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${review._id}`}>Edit</Button> 
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button> 
            
                        </TableCell> */}
                    </TRow>
                ))}
                
            </TableBody>
        </StyledTable>
        
    )
}

export default AllUsers;