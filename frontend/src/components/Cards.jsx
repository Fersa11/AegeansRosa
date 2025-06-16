import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)"
      }
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)"
      }
    }
  ]
}));

function Cards(dress) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 310, m: 1 }} className="card">
      <CardHeader title={dress.produktname} subheader={dress.subheader} />
      <CardMedia
        component="img"
        image={dress.img}
        alt={dress.produktname}
        height="194"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {dress.produktbeschreibung}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share"> */}
        {/* <ShareIcon /> */}
        {/* <SocialShareModal /> */}
        {/* </IconButton> */}
        <IconButton aria-label="whatsApp">
          <WhatsAppIcon />
        </IconButton>
        <IconButton aria-label="insta">
          <InstagramIcon />
        </IconButton>
        <Button aria-label="Order" href="mailto:x@ghmail">
          Order
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ExpandMoreIcon></ExpandMoreIcon>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>
            Preis: {dress.price} €
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Material: {dress.material}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Pflegehinweise: {dress.info}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Produktgröße: {dress.produktgroesse}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Cards;
