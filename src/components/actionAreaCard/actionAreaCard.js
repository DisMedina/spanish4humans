import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "./actionAreaCard.css";

export default function RecipeReviewCard({ index, title, body, image }) {

  return (
    <Card sx={{ maxWidth: 550, maxHeight: 680, backgroundColor: "#ffffff", borderTop: "5px solid #69ac8d", borderBottom: "5px solid #69ac8d" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#c4e899" }} aria-label="recipe">
            {index}
          </Avatar>
        }
        title={<Typography sx={{ fontSize: '2rem', color: 'white' }}>{title}</Typography>}
      />
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
      <CardContent>
      <Typography 
        variant="body2" 
        color="#69ac8d" 
        sx={{ 
          fontSize: '1.3vh',
          maxWidth: '100%',
          height: '11vw',
          '@media (max-width: 1080px)': {
            fontSize: '1vw',
          },
          }}
      >
        {body}
      </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      <Collapse timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{title}</Typography>
          <Typography paragraph>
            {body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}