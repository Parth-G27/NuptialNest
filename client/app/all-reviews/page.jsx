"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, styled } from '@mui/material';
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
  flexDirection: 'column', // Stack the items vertically
});

// StyledCard with full width
const StyledCard = styled(Card)(({ theme }) => ({
  margin: '10px 0',
  marginBottom: 32,
  padding: '10px',
  width: '100%', 
  maxWidth: '900px',
  background: 'linear-gradient(to right, #ffffff, #f2faff)',
  borderRadius: '15px',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: '8px',
    borderRadius: '10px',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
  marginLeft: '0px',
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
    fontSize: '12px',
    paddingLeft: '6px',
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

const ReviewButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: '#1e88e5',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '20px',
  padding: '5px 15px',
  fontSize: '12px',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
  '@media (max-width: 600px)': {
    padding: '2px 5px',
    fontSize: '10px',
  },
}));

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews();
  }, []);

  const getAllReviews = async () => {
    let response = await apiAllReviews();
    setReviews(response.data);
  };

  const slicedReviewText = (review) => {
    const maxLength = 375; // Maximum review text length
    return review.user_review.length > maxLength
      ? review.user_review.substring(0, maxLength) + '...'
      : review.user_review;
  };

  return (
    <GradientBox>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1e88e5', fontWeight: 'bold', marginBottom: 2, marginTop: 4 }}>
        All Reviews
      </Typography>
      {reviews.map((review, index) => (
        <StyledCard key={index}>
          <Box position="relative">
            {/* <ReviewButton>Review #{review.reviewId}</ReviewButton> */}
            <ReviewButton>{review.category}</ReviewButton>
            <CardContent >
              <UserDetails>
                <Avatar sx={{ bgcolor: '#64b5f6' }}>{review.email.charAt(0).toUpperCase()}</Avatar>
                <Box ml={2}>
                  <UserName>{review.title}</UserName>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 0.5 }}>
                      <Email fontSize="small" sx={{ color: 'text.secondary', marginRight: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {review.email}
                      </Typography>
                      <Typography variant="body2" sx={{marginLeft: '5px'}} color="text.secondary">
                        {review.time}
                      </Typography>
                  </Box>
                </Box>
              </UserDetails>

              {/* <ReviewText>{reviews.user_review}.slice(0, 375)</ReviewText> */}
              <ReviewText>{slicedReviewText(review)}</ReviewText>

              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <ReadMoreButton endIcon={<ArrowForward />}>READ MORE</ReadMoreButton>
              </Box>
            </CardContent>
          </Box>
        </StyledCard>
      ))}
    </GradientBox>
  );
};

export default AllReviews;
