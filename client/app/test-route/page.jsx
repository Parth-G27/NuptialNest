"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button, styled } from '@mui/material';
import { apiAllReviews } from '../api/apiAllReview/route';
import { ArrowForward, Email } from '@mui/icons-material';

// GradientBox styling for background
const GradientBox = styled(Box)(({ theme }) => ({
  padding: '20px',
  background: '#f0f4f8',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
}));

// StyledCard with full width






const EmailText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: '#546e7a',
  marginLeft: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    marginLeft: '0',
    marginTop: '5px',
  },
}));

const ReviewText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: '#37474f',
  lineHeight: 1.5,
  margin: '10px 0',
  paddingLeft: '12px',
  borderLeft: '4px solid #2196f3',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    paddingLeft: '8px',
    margin: '15px 0',
  },
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
  color: '#1e88e5',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'transparent',
    transform: 'translateY(-3px)',
    transition: '0.2s',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    padding: '6px 10px',
  },
}));

//

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '10px 0',
  marginBottom: 32,
  padding: '10px',
  width: '100%', 
  maxWidth: '900px',
  background: 'linear-gradient(to right, #ffffff, #f2faff)',
  borderRadius: '15px',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
}));

const UserDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const UserName = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#0d47a1',
  marginLeft: '0px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    marginTop: '10px',
    marginLeft: '0',
    paddingRight: '80px', // Make space for the category button
  },
}));

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
  [theme.breakpoints.down('sm')]: {
    top: '15px',
    right: '15px',
    padding: '3px 10px',
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
      <Typography variant="h4" gutterBottom sx={(theme) => ({
        textAlign: 'center',
        color: '#1e88e5',
        fontWeight: 'bold',
        marginBottom: 2,
        marginTop: 4,
        [theme.breakpoints.down('sm')]: {
          fontSize: '24px',
          marginTop: 2,
        },
      })}>
        All Reviews
      </Typography>
      {reviews.map((review, index) => (
        <StyledCard key={index}>
          <Box position="relative">
            <ReviewButton>{review.category}</ReviewButton>
            <CardContent>
              <UserDetails>
                <Avatar sx={{ bgcolor: '#64b5f6', width: 40, height: 40 }}>
                  {review.email.charAt(0).toUpperCase()}
                </Avatar>
                <Box sx={{ flexGrow: 1, ml: { xs: 0, sm: 2 }, mt: { xs: 1, sm: 0 } }}>
                  <UserName>{review.title}</UserName>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 0.5, flexWrap: 'wrap' }}>
                    <Email fontSize="small" sx={{ color: 'text.secondary', marginRight: 0.5 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '11px', sm: '12px' } }}>
                      {review.email}
                    </Typography>
                    <Typography variant="body2" sx={{ marginLeft: '5px', fontSize: { xs: '11px', sm: '12px' } }} color="text.secondary">
                      {review.time}
                    </Typography>
                  </Box>
                </Box>
              </UserDetails>

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