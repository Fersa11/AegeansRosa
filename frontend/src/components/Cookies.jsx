import CookieConsent from "react-cookie-consent";

function Cookies() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Alle akzeptieren"
      declineButtonText="Nur notwendige Cookies"
      enableDeclineButton
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#fff", background: "#ca2e56", fontSize: "13px" }}
      declineButtonStyle={{
        color: "#fff",
        background: "#888",
        fontSize: "13px"
      }}
      expires={150}
      onAccept={() => {
        // Hier kannst du z.B. Google Analytics initialisieren
      }}
      onDecline={() => {
        // Hier kannst du sicherstellen, dass keine Statistik-/Marketing-Skripte geladen werden
      }}
    >
      Diese Website verwendet Cookies, um grundlegende Funktionen
      bereitzustellen (z.B. Login, Spracheinstellungen) und um Ihr
      Nutzungserlebnis zu verbessern.
      <br />
      <strong>Notwendige Cookies</strong> sind für den Betrieb der Seite
      erforderlich und werden immer gesetzt.
      <br />
      <strong>Statistik- und Marketing-Cookies</strong> (z.B. Google Analytics,
      Facebook Pixel) werden nur mit Ihrer Zustimmung gesetzt.
      <br />
      Details zu den verwendeten Cookies, deren Zweck, Anbieter und
      Speicherdauer finden Sie in unserer{" "}
      <a
        href="/Datenschutz"
        style={{ color: "#fff", textDecoration: "underline" }}
      >
        Datenschutzerklärung
      </a>
      . Sie können Ihre Auswahl dort jederzeit ändern oder widerrufen.
    </CookieConsent>
  );
}
export default Cookies;
