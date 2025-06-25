import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider
} from "@mui/material";
import { color, styled } from "@mui/system";

import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
// import { BsArrowUpCircle } from "react-icons/bs";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#DBD7D2",
  color: "black",
  padding: "32px 0 32px 0",
  position: "relative"
}));

const StyledLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: "#ca2e56",
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
  top: "24px",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ca2e56"
  }
}));

const Footer = () => {
  // const [email, setEmail] = useState("");

  // const handleNewsletterSubmit = (e) => {
  //   e.preventDefault();
  //   if (email && email.includes("@")) {
  //     console.log("Newsletter Anmeldung:", email);
  //     setEmail("");
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledFooter component="footer" role="contentinfo">
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Kunden Support
            </Typography>
            {/* <StyledLink variant="body2" gutterBottom>
              Help & Contact
            </StyledLink> */}
            <StyledLink variant="body2" gutterBottom>
              Versand Informationen
            </StyledLink>
            {/* <StyledLink variant="body2" gutterBottom>
              Rückgabepolitik
            </StyledLink> */}
            <StyledLink variant="body2" gutterBottom>
              Size Guide
            </StyledLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <StyledLink variant="body2" gutterBottom>
              Über uns
            </StyledLink>
            <StyledLink variant="body2" gutterBottom>
              Datenschutzbestimmungen
            </StyledLink>
            {/* <StyledLink variant="body2" gutterBottom>
              Nutzungsbestimmungen
            </StyledLink> */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            {/* <Box sx={{ mb: 2 }}> */}
            <SocialIcon aria-label="Instagram" size="small">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon aria-label="EMail" size="small">
              <EmailIcon />
            </SocialIcon>
            {/* </Box> */}
            {/* <form onSubmit={handleNewsletterSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Newsletter Signup"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  input: { color: "white" },
                  label: { color: "white" }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 1, backgroundColor: "#ca2e56" }}
                fullWidth
              >
                Subscribe
              </Button>
            </form> */}
          </Grid>

          {/* <Grid item xs={12} sm={6} md={3}> */}
          {/* <Typography variant="h6" gutterBottom>
              Payment & Security
            </Typography>
            <Box sx={{ mb: 2 }}>
              <FaCreditCard size={24} style={{ marginRight: 12 }} />
              <FaPaypal size={24} style={{ marginRight: 12 }} />
              <FaLock size={24} />
            </Box>
            <Typography variant="body2">
              Your payment information is processed securely. We do not store
              credit card details nor have access to your credit card
              information.
            </Typography> */}
          {/* </Grid> */}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BackToTop onClick={scrollToTop} startIcon={<ArrowCircleUpIcon />}>
            Zurück zum Anfang
          </BackToTop>
        </Grid>
        <Divider sx={{ my: 1, backgroundColor: "#ca2e56" }} />

        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" color="text.primary">
              © {new Date().getFullYear()} Aegean's RoSa. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
