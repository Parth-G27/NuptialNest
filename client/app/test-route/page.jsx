"use client";
import React, { useState, useEffect } from 'react';
import { 
  Box, Card, CardContent, Typography, Chip, Button, 
  Avatar, Grid, Divider
} from '@mui/material';
import { styled } from '@mui/system';
import { ArrowForward, Email } from '@mui/icons-material';
import { apiAllReviews } from '../api/apiAllReview/route';

const StyledCard = styled(Card)({
  marginBottom: 32,
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
  },
});

const StyledChip = styled(Chip)({
  backgroundColor: '#3f51b5',
  color: 'white',
  fontWeight: 'bold',
  borderRadius: 20,
  padding: '4px 8px',
});

const ReviewTypography = styled(Typography)({
  position: 'relative',
  paddingLeft: 24,
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#ffa726',
    borderRadius: 4,
  },
});

const ReadMoreButton = styled(Button)({
  color: '#ffa726',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(255, 167, 38, 0.1)',
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
  }

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#3f51b5', fontWeight: 'bold', marginBottom: 4 }}>
        All Reviews
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid item xs={12} key={index}>
            <StyledCard>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Avatar sx={{ bgcolor: '#ffa726', marginRight: 2 }}>
                    {review.name[0]}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                      {review.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 0.5 }}>
                      <Email fontSize="small" sx={{ color: 'text.secondary', marginRight: 0.5 }} />
                      <Typography variant="body2" color="text.secondary">
                        {review.email}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginY: 2 }} />
                <ReviewTypography variant="body1" paragraph sx={{ color: 'text.primary', fontStyle: 'italic' }}>
                  "{review.user_review}"
                </ReviewTypography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                  <StyledChip label={`Review #${review.reviewId}`} size="small" />
                  <ReadMoreButton endIcon={<ArrowForward />}>
                    Read More
                  </ReadMoreButton>
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AllReviews;