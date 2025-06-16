import { Routes, Route } from "react-router-dom";
import Me from "../src/pages/Me.jsx";
import Home from "../src/pages/Home.jsx";

import DressPage from "./pages/DressPage.jsx";

import { useCategoryStore } from "./store/catagory.js";

import { useAuthStore } from "./store/useAuthStore.js";
import AddDress from "./pages/AddDress.jsx";

function App() {
  const { category } = useCategoryStore();
  // console.log("Current category:", category);
  const { user } = useAuthStore();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dresses/:category" element={<DressPage />} />
      <Route path="/Me" element={<Me />} />
      {user.isAdmin && <Route path="/admin/add-dress" element={<AddDress />} />}
    </Routes>
  );
}

export default App;
