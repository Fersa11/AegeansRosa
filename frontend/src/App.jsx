import { Routes, Route } from "react-router-dom";
import Me from "../src/pages/Me.jsx";
import Home from "../src/pages/Home.jsx";

import DressPage from "./pages/DressPage.jsx";

import { useCategoryStore } from "./store/catagory.js";

function App() {
  const { category } = useCategoryStore();
  // console.log("Current category:", category);

  return (
    <div>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dresses/:category" element={<DressPage />} />
        <Route path="/Me" element={<Me />} />
      </Routes>
    </div>
  );
}

export default App;
