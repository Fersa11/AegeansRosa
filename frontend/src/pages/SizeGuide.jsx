import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow
} from "@mui/material";

import Messung_Taille from "../assets/Messung_Taille.png";
import Messung_Brust from "../assets/Messung_Brust.png";
import Messung_Huefte from "../assets/Messung_Huefte.png";

export default function SizeGuide() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ color: "#ca2e56" }}
      >
        Größenguide
      </Typography>
      <Typography variant="body1">
        Finde die perfekte Passform mit unserem Größenguide. Miss dich richtig
        aus und vergleiche deine Maße mit unseren Tabellen. So misst du richtig.
      </Typography>
      <Paper elevation={3} sx={{ marginY: 4, padding: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Avatar
              alt="Messung Brust"
              src={Messung_Brust}
              sx={{ width: 200, height: 200, margin: "auto" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h6" gutterBottom>
              Messung Brust
            </Typography>
            <Typography>
              Miss an der weitesten Stelle deiner Brust, waagrecht um den
              Körper.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* Messung Taille */}
      <Paper elevation={3} sx={{ marginY: 4, padding: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Avatar
              alt="Messung Taille"
              src={Messung_Taille}
              sx={{ width: 200, height: 200, margin: "auto" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h6" gutterBottom>
              Messung Taille
            </Typography>
            <Typography>
              Miss an der schmalsten Stelle deiner Taille.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ marginY: 4, padding: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Avatar
              alt="Messung Huefte"
              src={Messung_Huefte}
              sx={{ width: 200, height: 200, margin: "auto" }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h6" gutterBottom>
              Messung Hüfte
            </Typography>
            <Typography>Miss an der breitesten Stelle deiner Hüfte.</Typography>
          </Grid>
        </Grid>
      </Paper>
      {/* </Box> */}
      <Typography variant="h6" component="h3" gutterBottom>
        Damen - Oberteile & Kleider
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Größe (EU)</TableCell>
            <TableCell>Brust (cm)</TableCell>
            <TableCell>Taille (cm)</TableCell>
            <TableCell>Hüfte (cm)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>34</TableCell>
            <TableCell>80-84</TableCell>
            <TableCell>62-66</TableCell>
            <TableCell>86-90</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>36</TableCell>
            <TableCell>84-88</TableCell>
            <TableCell>66-70</TableCell>
            <TableCell>90-94</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>38</TableCell>
            <TableCell>88-92</TableCell>
            <TableCell>70-74</TableCell>
            <TableCell>94-98</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>40</TableCell>
            <TableCell>92-96</TableCell>
            <TableCell>74-78</TableCell>
            <TableCell>98-102</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>42</TableCell>
            <TableCell>96-100</TableCell>
            <TableCell>78-82</TableCell>
            <TableCell>102-106</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>44</TableCell>
            <TableCell>100-104</TableCell>
            <TableCell>82-86</TableCell>
            <TableCell>106-110</TableCell>
          </TableRow>
          {/* <!-- Weitere Zeilen --> */}
        </TableBody>
      </Table>
    </Box>
  );
}
