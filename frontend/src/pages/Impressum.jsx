import { List, ListItem, Typography, Box } from "@mui/material";

export default function Impressum() {
  return (
    <Box sx={{ pl: 3, marginBottom: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Impressum
      </Typography>

      <Typography sx={{ marginBottom: 2 }}>Angaben gemäß § 5 TMG</Typography>

      <Typography>Gülsen Sayin</Typography>
      <Typography>Märkische Str. 46</Typography>
      <Typography> 58239, Schwerte</Typography>
      <Typography sx={{ marginTop: 2, fontWeight: "bold" }}>
        Kontakt:
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        E-Mail: g.sayin@hotmail.de
      </Typography>

      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        Umsatzsteuer-ID:
      </Typography>
      <Typography>
        Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
      </Typography>
      <Typography>1111111111</Typography>

      <Typography sx={{ fontWeight: "bold", marginTop: 2 }}>
        Haftung für Inhalte
      </Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>Haftung für Links</Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>Urheberrecht</Typography>
      <Typography sx={{ marginBottom: 2 }}>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </Typography>
    </Box>
  );
}
