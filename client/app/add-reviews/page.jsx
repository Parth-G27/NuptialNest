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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
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

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: 12,
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(0, 0, 0, 0.23)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
}));

const categories = [
  'Product Review',
  'Service Feedback',
  'Customer Support',
  'Website Experience',
  'Feature Request',
  'Bug Report',
  'General Feedback',
];

function formatDate(date) {
  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${month} ${year}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

const initialValue = {
  title: '',
  email: '',
  time: formatDate(new Date()), // Use the custom date format
  category: '',
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

  const addReviewDetails = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await apiAddReviews(review);
    console.log(review);
    setReview(initialValue);
    setIsSubmitting(false);
    setSnackbarOpen(true);
    router.push('/all-reviews');
    // console.log(new Date());
  };

  return (
    <ThemeProvider theme={theme}>
      <Fade in={true} timeout={1000}>
        <StyledPaper elevation={0}>
          <Typography variant="h4" gutterBottom align="center" fontWeight="bold" color="primary">
            Add Review
          </Typography>
          <Form onSubmit={addReviewDetails}>
            <TextField
              label="Your Title"
              variant="outlined"
              name="title"
              value={review.title}
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

            <StyledFormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <StyledSelect
                labelId="category-label"
                id="category"
                name="category"
                value={review.category}
                onChange={onValueChange}
                label="Category"
                required
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </StyledSelect>
            </StyledFormControl>

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