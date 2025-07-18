import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import { Button, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

function Cards({
  produktname,
  produktbeschreibung,
  image,
  price,
  produktgroesse,
  info,
  material
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Card sx={{ maxWidth: 310, mx: 2, my: 3 }} className="card">
      <CardHeader title={produktname} />
      <Slider {...settings}>
        {image?.map((imgUrl, index) => (
          <CardMedia
            key={index}
            component="img"
            image={imgUrl}
            alt={`${produktname} ${index + 1}`}
            height="194"
          />
        ))}
      </Slider>
      <CardContent>
        <Typography variant="body2" sx={{ color: "grey", mt: 2 }}>
          {produktbeschreibung}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="insta">
          <InstagramIcon
            sx={{
              color: "grey",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#ca2e56"
              }
            }}
          />
        </IconButton>
        <Button
          aria-label="Order"
          href={`mailto:kontakt@aegeansrosa.de?subject=Anfrage%20AegeansRosa%20${encodeURIComponent(
            produktname || ""
          )}`}
          sx={{
            color: "grey",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#ca2e56"
            }
          }}
        >
          Order
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <InfoIcon
            sx={{
              color: "grey",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#ca2e56"
              }
            }}
          />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Preis: {price} €</Typography>
          <Typography sx={{ marginBottom: 2 }}>Material: {material}</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Pflegehinweise: {info}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Produktgröße: {produktgroesse}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Cards;
