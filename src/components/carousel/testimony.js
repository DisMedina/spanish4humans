import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./testimony.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ index, title, body, image }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400, maxHeight: 550, backgroundColor: "#876445" }}>
      {/* backgroundColor: "#CA955C" */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#69ac8d" }} aria-label="recipe">
            {index}
          </Avatar>
        }
        // action={
        //   // <IconButton aria-label="settings">
        //   //   <MoreVertIcon />
        //   // </IconButton>
        // }
        title={<Typography sx={{ fontSize: '2rem', color: 'white' }}>{title}</Typography>}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="350"
        image={image}
        alt="placeholder"
        sx={{
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '100%', // Ensure the image takes the full width of the container
        }}
      />
      <CardContent>
        <Typography variant="body2" color="white" fontSize= '1rem'>
        {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
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