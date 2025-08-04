import { Helmet } from "react-helmet-async";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import Profile_Photo from "../assets/Profile_Photo.jpg";
const UeberMich = () => {
  return (
    <>
      <Helmet>
        <title>Über Aegean's Rosa – Unsere Geschichte & Werte</title>
        <meta
          name="description"
          content="Erfahre mehr über die Philosophie und Leidenschaft hinter Aegean's Rosa. Mode mit Herz und Stil."
        />
      </Helmet>

      <Box sx={{ padding: 4 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ color: "#ca2e56" }}
        >
          Über mich – AegeansRosa
        </Typography>

        {/* Abschnitt 1: Wer ich bin */}
        <Paper elevation={3} sx={{ marginY: 4, padding: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Avatar
                alt="Gülsen Porträt"
                src={Profile_Photo}
                sx={{ width: 200, height: 200, margin: "auto" }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h6" gutterBottom>
                Wer ich bin
              </Typography>
              <Typography>
                Hallo, ich bin <strong>Gülsen</strong> – die kreative Seele
                hinter <strong>AegeansRosa</strong>. Ich entwerfe, nähe und
                präsentiere handgemachte Kleidung und Accessoires mit viel Liebe
                zum Detail. Mein Name bedeutet auf Türkisch „Rosengarten“ – und
                genau diese Mischung aus Natürlichkeit, Wärme und Persönlichkeit
                spiegelt sich in meinen Designs wider.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Abschnitt 2: Wie ich arbeite */}
        <Paper elevation={3} sx={{ marginY: 4, padding: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Avatar
                alt="Beim Nähen"
                src="/images/naehen.jpg"
                sx={{ width: 200, height: 200, margin: "auto" }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h6" gutterBottom>
                Wie ich arbeite
              </Typography>
              <Typography>
                Jedes Kleidungsstück entsteht in meinem Atelier – von der ersten
                Skizze bis zur letzten Naht. Ich wähle die Stoffe selbst aus,
                achte auf Qualität und Nachhaltigkeit und entwickle Schnitte,
                die <strong>alltagstauglich, langlebig und zeitlos</strong>{" "}
                sind. Meine Inspiration ziehe ich aus meiner Heimat an der Ägäis
                – sie fließt in jedes Design mit ein.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Abschnitt 3: Messeauftritt */}
        <Paper elevation={3} sx={{ marginY: 4, padding: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Avatar
                alt="Messeauftritt"
                src="/images/messe.jpg"
                sx={{ width: 200, height: 200, margin: "auto" }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h6" gutterBottom>
                Wo du mich findest
              </Typography>
              <Typography>
                Neben meinem Online-Schaufenster bin ich regelmäßig auf{" "}
                <strong>Designermärkten in NRW</strong> unterwegs – oft
                gemeinsam mit Kolleg*innen unter dem Label{" "}
                <strong>„The Mix“</strong>. Dort kannst du meine Stücke live
                erleben, anprobieren und mit mir ins Gespräch kommen. Der
                Verkauf über diese Seite erfolgt ganz persönlich – per{" "}
                <strong>E-Mail-Kontakt</strong>.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Kontakt */}
        <Box textAlign="center" marginTop={4}>
          <Typography variant="h6" gutterBottom>
            Lust auf ein handgemachtes Lieblingsstück?
          </Typography>
          <Typography>
            Dann schreib mir einfach eine Nachricht – ich freue mich auf den
            Austausch mit dir!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UeberMich;
