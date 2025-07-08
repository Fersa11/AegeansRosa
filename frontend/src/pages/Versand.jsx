import { Box, Typography, List, ListItem } from "@mui/material";

export default function Versand() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Versandinformationen
      </Typography>
      <Typography variant="body1" paragraph>
        Hier finden Sie alle wichtigen Informationen zu unseren Versandarten,
        Lieferzeiten und -kosten.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Versandarten
      </Typography>
      <List>
        <ListItem>Standardversand mit DHL</ListItem>
        <ListItem>Expressversand (innerhalb von 1–2 Werktagen)</ListItem>
        <ListItem>Abholung vor Ort (nach Terminvereinbarung)</ListItem>
      </List>
    </Box>
  );
}
