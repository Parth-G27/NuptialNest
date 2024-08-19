"use client";

import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Typography, Box, styled } from '@mui/material';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
`;

const StyledPaper = styled(Paper)`
  padding: 40px;
  max-width: 600px;
  width: 100%;
  background-color: #ffffff; 
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
`;

const StyledButton = styled(Button)`
  background-color: #0062ff;
  color: #fff;
  margin-top: 20px;
  padding: 10px 20px;
  &:hover {
    background-color: #004bb5;
  }
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ResponsiveTextField = styled(TextField)`
  @media (max-width: 600px) {
    &.MuiTextField-root {
      width: 100%;
    }
  }
`;
const initialValue = {
  name: '',
  email: '',
  user_review: ''
};

const ResponsiveForm = ({ params }) => {
  const [updatedReview, setUpdatedReview] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedReview({
      ...updatedReview,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(updatedReview);
  };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h5" align="center" gutterBottom>
          Edit Review : {params.id}
        </Typography>
        <FormBox component="form" onSubmit={handleSubmit}>
          <ResponsiveTextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            value={updatedReview.name}
            onChange={handleChange}
            required
          />
          <ResponsiveTextField
            label="Email"
            variant="outlined"
            fullWidth
            name="email"
            value={updatedReview.email}
            onChange={handleChange}
            required
            type="email"
          />
          <ResponsiveTextField
            label="Your Review"
            variant="outlined"
            fullWidth
            name="user_review"
            value={updatedReview.user_review}
            onChange={handleChange}
            required
            multiline
            rows={4}
          />
          <StyledButton type="submit" variant="contained" fullWidth>
            Edit Review
          </StyledButton>
        </FormBox>
      </StyledPaper>
    </StyledContainer>
  );
};

export default ResponsiveForm;

