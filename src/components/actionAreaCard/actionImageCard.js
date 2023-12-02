import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import "./actionAreaCard.css";

export default function RecipeReviewCard({ index, title, body, image }) {

  return (
    <Card sx={{ maxWidth: 550, maxHeight: 680, backgroundColor: "#876445" }}>
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt="placeholder"
        sx={{
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '100%', 
        }}
      />
    </Card>
  );
}