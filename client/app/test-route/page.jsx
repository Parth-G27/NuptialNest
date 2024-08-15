"use client";

import React from 'react';
import { Box, Typography, Button, Card, CardContent, Chip } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const blogPosts = [
  {
    category: 'Category',
    date: '24 JAN, 2020',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
  },
  {
    category: 'Category',
    date: '24 JAN, 2020',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
  },
  {
    category: 'Category',
    date: '24 JAN, 2020',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
  },
];

const BlogList = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 2 }}>
      {blogPosts.map((post, index) => (
        <Card key={index} sx={{ marginBottom: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <Chip
                label={post.category}
                size="small"
                sx={{
                  backgroundColor: '#3f51b5',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: 1,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {post.date}
              </Typography>
            </Box>
            <Typography variant="h5" component="div" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {post.description}
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
  );
};

export default BlogList;