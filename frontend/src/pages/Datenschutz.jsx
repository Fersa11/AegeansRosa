import { Helmet } from "react-helmet-async";
import { List, ListItem, Typography, Box } from "@mui/material";

export default function Datenschutz() {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung | Aegean's Rosa</title>
        <meta
          name="description"
          content="Informationen zum Datenschutz und zur Verwendung von Cookies auf unserer Website."
        />
      </Helmet>

      <Box sx={{ pl: 3, marginBottom: 2 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Datenschutzerklärung
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          1. Verantwortlicher:
        </Typography>
        <List dense disablePadding>
          <ListItem>Gülsen Sayin</ListItem>
          <ListItem>Märkische Str. 46</ListItem>
          <ListItem> 58239, Schwerte</ListItem>
          <ListItem>E-Mail: g.sayin@hotmail.de</ListItem>
        </List>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          2. Allgemeines zur Datenverarbeitung
        </Typography>
        <Typography variant="h7" sx={{ marginBottom: 2 }}>
          Wir verarbeiten personenbezogene Daten der Nutzer unserer Website
          grundsätzlich nur, soweit dies zur Bereitstellung einer
          funktionsfähigen Website sowie unserer Inhalte und Leistungen
          erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
          regelmäßig nur nach Einwilligung des Nutzers oder wenn die
          Verarbeitung durch gesetzliche Vorschriften gestattet ist.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          3. Rechte der betroffenen Personen
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>Sie haben das Recht:</Typography>
        <List>
          <ListItem>auf Auskunft (Art. 15 DSGVO)</ListItem>
          <ListItem>auf Berichtigung (Art. 16 DSGVO)</ListItem>
          <ListItem>auf Löschung (Art. 17 DSGVO)</ListItem>
          <ListItem>
            auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
          </ListItem>
          <ListItem>auf Datenübertragbarkeit (Art. 20 DSGVO)</ListItem>
          <ListItem>
            auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
          </ListItem>{" "}
          <ListItem>
            auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)
          </ListItem>
        </List>

        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          4. Hosting
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Unsere Website wird bei folgendem Anbieter gehostet: [Name des
          Hosting-Anbieters] [Adresse des Anbieters] Es werden dabei folgende
          Daten verarbeitet: IP-Adresse, Datum und Uhrzeit des Zugriffs,
          Browsertyp, Betriebssystem, Referrer-URL. Rechtsgrundlage: Art. 6 Abs.
          1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb der
          Website)
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          5. Cookies
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Wir verwenden Cookies, um unsere Website nutzerfreundlicher zu
          gestalten.
        </Typography>
        <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
          a) Technisch notwendige Cookies
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Diese Cookies sind für den Betrieb der Website erforderlich.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
        </Typography>

        <Typography sx={{ marginBottom: 2, fontWeight: "bold" }}>
          b) Technisch nicht notwendige Cookies
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Diese Cookies werden nur mit Ihrer Einwilligung gesetzt.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO Sie können Ihre
          Cookie-Einstellungen jederzeit im [Cookie-Banner / Cookie-Manager]
          ändern.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          6. Cookie-Banner (react-cookie-consent)
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Zur Einholung und Verwaltung Ihrer Einwilligung in die Verwendung von
          Cookies nutzen wir das Open-Source-Tool „react-cookie-consent“. Beim
          ersten Besuch unserer Website wird Ihnen ein Banner angezeigt, über
          das Sie auswählen können, ob Sie nur technisch notwendige Cookies oder
          auch Statistik-/Marketing-Cookies zulassen möchten. Ihre Auswahl wird
          in einem Cookie auf Ihrem Endgerät gespeichert, sodass die Abfrage bei
          einem erneuten Besuch nicht erneut erscheint. Sie können Ihre
          Einwilligung jederzeit über den Link in der Datenschutzerklärung
          widerrufen oder ändern. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (technisch notwendige
          Cookies)
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          7. Kontaktaufnahme
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, verarbeiten
          wir Ihre Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage: Art. 6
          Abs. 1 lit. b DSGVO
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          8. Vertragsabwicklung
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Zur Durchführung von Verträgen verarbeiten wir Ihre Daten (z.B. Name,
          Adresse, Zahlungsdaten). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2, marginBottom: 2 }}>
          9. Drittanbieter & eingebundene Dienste
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Wir verwenden ggf. folgende Dienste:
        </Typography>
        <List dense disablePadding sx={{ listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item", ml: 2 }}>
            Google Analytics Anbieter: Google Ireland Limited
            Datenschutzerklärung:
            <br />
            <a
              href="https://policies.google.com/privacy"
              rel="nofollow noopener"
              target="_blank"
            >
              https://policies.google.com/privacy
            </a>{" "}
            <br />
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          </ListItem>
          <ListItem sx={{ display: "list-item", ml: 2 }}>
            Instagram Plugin Anbieter: Meta Platforms Ireland Limited
            Datenschutzerklärung:
            <br />
            <a
              href="https://help.instagram.com/519522125107875"
              rel="nofollow noopener"
              target="_blank"
            >
              https://help.instagram.com/519522125107875
            </a>{" "}
            <br />
            Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
          </ListItem>
          <ListItem sx={{ display: "list-item", ml: 2 }}>
            Google Fonts (lokales Hosting über Fontsource) Zur einheitlichen
            Darstellung von Schriftarten verwenden wir die Schriftart „Roboto“,
            die lokal über das Open-Source-Projekt Fontsource eingebunden wird.
            Dabei findet keine Verbindung zu Servern von Google statt. Es
            erfolgt keine Übertragung personenbezogener Daten an Dritte.
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an einer einheitlichen und ansprechenden Darstellung unseres
            Online-Angebots)
          </ListItem>
        </List>
      </Box>
    </>
  );
}
