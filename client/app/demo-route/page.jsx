"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, Grid, styled } from '@mui/material';
import { apiAllReviews } from '../api/apiAllReview/route';
import { ArrowForward, Email } from '@mui/icons-material';

// GradientBox styling for background
const GradientBox = styled(Box)({
  padding: '20px',
  background: '#f0f4f8',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// StyledCard with responsive width and fixed size
const StyledCard = styled(Card)(({ theme }) => ({
  margin: '10px 0',
  padding: '10px',
  width: '900px', // Responsive width
  maxWidth: '900px', // Set a maximum width for large screens
  background: 'linear-gradient(to right, #ffffff, #f2faff)',
  borderRadius: '15px',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 182, 193, 0.3)',
  [theme.breakpoints.down('sm')]: {
    padding: '8px',
    borderRadius: '10px',
    width: '400px',
  },
}));

const UserDetails = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
});

const UserName = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#0d47a1',
  marginLeft: '10px',
  '@media (max-width: 600px)': {
    fontSize: '16px',
  },
});

const EmailText = styled(Typography)({
  fontSize: '14px',
  color: '#546e7a',
  marginLeft: '10px',
  '@media (max-width: 600px)': {
    fontSize: '12px',
  },
});

const ReviewText = styled(Typography)({
  fontSize: '16px',
  color: '#37474f',
  lineHeight: 1.5,
  margin: '10px 0',
  paddingLeft: '12px',
  borderLeft: '4px solid #2196f3',
  '@media (max-width: 600px)': {
    fontSize: '14px',
    paddingLeft: '8px',
  },
});

const ReadMoreButton = styled(Button)({
  color: '#1e88e5',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'translateY(-3px)',
    transition: '0.2s',
  },
});

const ReviewButton = styled(Button)({
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: '#1e88e5',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '5px 15px',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
  '@media (max-width: 600px)': {
    padding: '4px 10px',
    fontSize: '12px',
  },
});

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
  }, []);

  const getAllReviews = async () => {
    let response = await apiAllReviews();
    setReviews(response.data);
  };

  return (
    <GradientBox>
        
      <Grid container spacing={2} justifyContent="center" direction="column" alignItems="center">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1e88e5', fontWeight: 'bold', marginBottom: 2, marginTop: 4 }}>
        All Reviews
      </Typography>
        {reviews.map((review, index) => (
          <Grid item xs={12} key={index}>
            <StyledCard>
              <Box position="relative">
                <ReviewButton>Review #{review.reviewId}</ReviewButton>
                <CardContent>
                  <UserDetails>
                    <Avatar sx={{ bgcolor: '#64b5f6' }}>{review.name.charAt(0).toUpperCase()}</Avatar>
                    <Box ml={2}>
                      <UserName>{review.name}</UserName>
                      <EmailText>
                        <Email sx={{ fontSize: '16px', marginRight: '5px' }} />
                        {review.email}
                      </EmailText>
                    </Box>
                  </UserDetails>

                  <ReviewText>"{review.user_review}"</ReviewText>

                  <Box display="flex" justifyContent="flex-end" alignItems="center">
                    <ReadMoreButton endIcon={<ArrowForward />}>READ MORE</ReadMoreButton>
                  </Box>
                </CardContent>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </GradientBox>
  );
};

export default AllReviews;
