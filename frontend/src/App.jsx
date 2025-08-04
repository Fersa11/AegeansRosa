import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import Cookies from "./components/Cookies.jsx";

function App() {
  const { category } = useCategoryStore();
  // console.log("Current category:", category);
  // const { user } = useAuthStore();
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
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
            <Route path="/Versand" element={<sitemap />} />
          </Routes>
        </Box>
        <Footer />
        <Cookies />
      </Box>
    </HelmetProvider>
  );
}

export default App;
