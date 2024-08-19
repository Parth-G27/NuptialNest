"use client";
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Rating,
  Snackbar,
  LinearProgress,
  Fade,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { Send as SendIcon, Star as StarIcon } from '@mui/icons-material';
import { apiAddReviews } from '../api/apiAddReview/route';
import { useRouter } from 'next/navigation'; 

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0062ff',
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 700,
  margin: '40px auto',
//   background: 'linear-gradient(145deg, #f8faff 0%, #ebf5ff 100%)',
  boxShadow: '0 10px 50px rgba(0, 100, 255, 0.3)',
  borderRadius: theme.shape.borderRadius * 3,
  overflow: 'hidden',
  position: 'relative',
}));

// const GlowEffect = styled('div')({
//   position: 'absolute',
//   top: -50,
//   left: -50,
//   right: -50,
//   bottom: -50,
//   background: 'radial-gradient(circle, rgba(0,149,255,0.1) 0%, rgba(0,149,255,0) 70%)',
//   zIndex: 0,
// });

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  position: 'relative',
  zIndex: 1,
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  background: 'linear-gradient(90deg, #1971FF 0%, #00a3ff 100%)',
  color: 'white',
  padding: theme.spacing(1.5, 3),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 7px 20px rgba(0, 118, 255, 0.3)',
  },
}));

const StyledRating = styled(Rating)({
  fontSize: '2rem',
  color: '#0062ff', // Use a hardcoded color instead of theme.palette.primary.main
});

const initialValue = {
  name: '',
  email: '',
  user_review: ''
};

const AddReview = () => {
  const [review, setReview] = useState(initialValue);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const onValueChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (event, newValue) => {
    setReview({ ...review, rating: newValue });
  };

  const addReviewDetails = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await apiAddReviews(review);
    console.log(review);
    setReview(initialValue);
    setIsSubmitting(false);
    setSnackbarOpen(true);
    router.push('/all-reviews');
  };

  return (
    <ThemeProvider theme={theme}>
      <Fade in={true} timeout={1000}>
        <StyledPaper elevation={0}>
          {/* <GlowEffect /> */}
          <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="primary">
            Add Review
          </Typography>
          <Form onSubmit={addReviewDetails}>
            <TextField
              label="Your Name"
              variant="outlined"
              name="name"
              value={review.name}
              onChange={onValueChange}
              fullWidth
              required
              InputProps={{ style: { borderRadius: 12 } }}
            />
            <TextField
              label="Email ID"
              variant="outlined"
              name="email"
              type="email"
              value={review.email}
              onChange={onValueChange}
              fullWidth
              required
              InputProps={{ style: { borderRadius: 12 } }}
            />
            <TextField
              label="Your Review"
              variant="outlined"
              name="user_review"
              value={review.user_review}
              onChange={onValueChange}
              multiline
              rows={4}
              fullWidth
              required
              InputProps={{ style: { borderRadius: 12 } }}
            />
            {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography component="legend" color="primary" fontWeight="bold">
                Your Rating
              </Typography>
              <StyledRating
                name="rating"
                value={review.rating}
                onChange={handleRatingChange}
                precision={0.5}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={<StarIcon fontSize="inherit" />}
              />
            </Box> */}
            <SubmitButton
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Your Review'}
            </SubmitButton>
          </Form>
          {isSubmitting && <LinearProgress sx={{ mt: 2 }} />}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={() => setSnackbarOpen(false)}
            message="Thank you! Your review has been submitted successfully."
          />
        </StyledPaper>
      </Fade>
    </ThemeProvider>
  );
};

export default AddReview;