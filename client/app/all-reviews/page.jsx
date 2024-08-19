"use client";
import react, { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled, Card, CardContent, Chip, Box, Typography } from '@mui/material'
import { apiAllReviews } from '../api/apiAllReview/route';
import { ArrowForward } from '@mui/icons-material';

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
        // <StyledTable>
        //     <TableHead>
        //         <THead>
        //             <TableCell>Id</TableCell>
        //             <TableCell>Name</TableCell>
                  
        //             <TableCell>Email</TableCell>
        //             <TableCell>Review</TableCell>
        //             <TableCell></TableCell>
        //         </THead>
        //     </TableHead>
        //     <TableBody>
        //         {reviews.map((review) => (
        //             <TRow key={review.id}>
        //                 <TableCell>{review.reviewId}</TableCell> {/* change it to review.id to use JSON Server */}
        //                 <TableCell>{review.name}</TableCell>
 
        //                 <TableCell>{review.email}</TableCell>
        //                 <TableCell>{review.user_review}</TableCell>
        //                 <TableCell>
        //                     <Button color="primary" variant="contained" style={{marginRight:10}}>Edit</Button> 
        //                     <Button color="secondary" variant="contained" onClick={() => deleteUserData(review._id)}>Delete</Button> 
            
        //                 </TableCell>
        //             </TRow>
        //         ))}
                
        //     </TableBody>
        // </StyledTable>
        <>
        <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      {reviews.map((review, index) => (
        <Card key={index} sx={{ marginBottom: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <Chip
                label={review.email}
                size="small"
                sx={{
                  backgroundColor: '#3f51b5',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: 1,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {review.reviewId}
              </Typography>
            </Box>
            <Typography variant="h5" component="div" gutterBottom>
              {review.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {review.user_review}
            </Typography>
            <Button
              endIcon={<ArrowForward />}
              sx={{
                color: '#ffa726',
                padding: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              READ MORE
            </Button>
          </CardContent>
        </Card>
      ))}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#3f51b5',
            color: '#3f51b5',
            '&:hover': {
              borderColor: '#3f51b5',
              backgroundColor: 'rgba(63, 81, 181, 0.04)',
            },
          }}
        >
          SEE ALL ARTICLES
        </Button>
      </Box>
    </Box>

        </>
        
    )
}

export default AllUsers;