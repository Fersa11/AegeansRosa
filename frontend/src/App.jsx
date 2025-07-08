import { Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import DressPage from "./pages/DressPage.jsx";
import Datenschutz from "./pages/Datenschutz.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Impressum from "./pages/Impressum.jsx";
import { Box } from "@mui/material";
import { useCategoryStore } from "./store/catagory.js";
import Versand from "./pages/Versand.jsx";
import SizeGuide from "./pages/SizeGuide.jsx";
// import { useAuthStore } from "../backup/useAuthStore.js";
import UeberMich from "./pages/UeberMich.jsx";
import CookieConsent from "react-cookie-consent";

function App() {
  const { category } = useCategoryStore();
  // console.log("Current category:", category);
  // const { user } = useAuthStore();
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dresses/:category" element={<DressPage />} />
          <Route path="/UeberMich" element={<UeberMich />} />
          <Route path="/Datenschutz" element={<Datenschutz />} />
          <Route path="/Impressum" element={<Impressum />} />
          <Route path="/SizeGuide" element={<SizeGuide />} />
          <Route path="/Versand" element={<Versand />} />
        </Routes>
      </Box>
      <Footer />
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
        <strong>Statistik- und Marketing-Cookies</strong> (z.B. Google
        Analytics, Facebook Pixel) werden nur mit Ihrer Zustimmung gesetzt.
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
    </Box>
  );
}

export default App;
