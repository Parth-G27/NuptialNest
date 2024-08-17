"use client";
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  LinearProgress,
  Fade,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import { Send as SendIcon } from '@mui/icons-material';
import { apiAddReviews } from '../api/apiAddReview/route';
import { useRouter } from 'next/navigation'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#0062ff',
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '100%',
  width: '100%',
  margin: '20px auto',
  boxShadow: '0 10px 50px rgba(0, 100, 255, 0.3)',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
    maxWidth: 700,
    margin: '40px auto',
    borderRadius: theme.shape.borderRadius * 3,
  },
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(3),
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: 'linear-gradient(90deg, #1971FF 0%, #00a3ff 100%)',
  color: 'white',
  padding: theme.spacing(1.5, 3),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 7px 20px rgba(0, 118, 255, 0.3)',
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(3),
  },
}));

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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const onValueChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const addReviewDetails = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await apiAddReviews(review);
    setReview(initialValue);
    setIsSubmitting(false);
    setSnackbarOpen(true);
    router.push('/all-reviews');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: isMobile ? 2 : 4 }}>
        <Fade in={true} timeout={1000}>
          <StyledPaper elevation={0}>
            <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="primary" sx={{ fontSize: isMobile ? '1.75rem' : '2.125rem' }}>
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
                rows={isMobile ? 3 : 4}
                fullWidth
                required
                InputProps={{ style: { borderRadius: 12 } }}
              />
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
          </StyledPaper>
        </Fade>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message="Thank you! Your review has been submitted successfully."
        />
      </Box>
    </ThemeProvider>
  );
};

export default AddReview;