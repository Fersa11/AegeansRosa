import {
  Box,
  Container,
  Grid,
  Button,
  IconButton,
  Divider
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { color, styled } from "@mui/system";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#DBD7D2",
  color: "black",
  padding: "16px 0 8px 0",
  position: "relative"
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    color: "#ca2e56",
    textDecoration: "none",
    transition: "color 0.3s ease"
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: "black",
  "&:hover": {
    color: "#ca2e56",
    transform: "scale(1.1)",
    transition: "all 0.3s ease"
  }
}));

const BackToTop = styled(Button)(({ theme }) => ({
  position: "absolute",
  right: "24px",
  top: "8px",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ca2e56"
  }
}));

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledFooter component="footer" role="contentinfo">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Kunden Support
            </Typography>
            <StyledLink
              variant="body2"
              component={Link}
              to="/Versand"
              gutterBottom
            >
              Versand
            </StyledLink>
            <br />
            <StyledLink
              variant="body2"
              component={Link}
              to="/SizeGuide"
              gutterBottom
            >
              Size Guide
            </StyledLink>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <StyledLink
              variant="body2"
              component={Link}
              to="/UeberMich"
              gutterBottom
            >
              Über mich
            </StyledLink>
            <br />
            <StyledLink
              variant="body2"
              component={Link}
              to="/Datenschutz"
              gutterBottom
            >
              Datenschutzbestimmungen
            </StyledLink>
            <br />
            <StyledLink
              variant="body2"
              component={Link}
              to="/Impressum"
              gutterBottom
            >
              Impressum
            </StyledLink>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Kontakt
            </Typography>
            {/* <Box sx={{ mb: 2 }}> */}
            <SocialIcon aria-label="Instagram" size="small">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon aria-label="EMail" size="small">
              <EmailIcon />
            </SocialIcon>
            {/* </Box> */}
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <BackToTop
            onClick={scrollToTop}
            startIcon={<ArrowCircleUpIcon />}
            sx={{ mt: 0.5 }}
          >
            Zum Anfang
          </BackToTop>
        </Grid>
        <Divider sx={{ my: 1, backgroundColor: "#ca2e56" }} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid>
            <Typography variant="body2" color="text.primary">
              © 2025 - {new Date().getFullYear()}, Fersa. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
