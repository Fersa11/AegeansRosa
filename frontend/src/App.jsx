import { Routes, Route } from "react-router-dom";
import Me from "../src/pages/Me.jsx";
import Home from "../src/pages/Home.jsx";

import DressPage from "./pages/DressPage.jsx";

function App() {
  return (
    <div>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dresses" element={<DressPage />}></Route>
        <Route path="/Me" element={<Me />}></Route>
      </Routes>
    </div>
  );
}

export default App;
