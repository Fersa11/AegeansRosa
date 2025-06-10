import Cards from "../components/Cards";
import { Box } from "@mui/material";
import React, { useState, useMemo } from "react";
import Sidebar from "../components/Sidebar";
import dresses from "../assets/DressesDB";

function DressPage() {
  const [category, setCategory] = useState("JACKEN");
  function defineCategory(dressType) {
    setCategory(dressType);
  }

  const filteredDresses = useMemo(() => {
    console.log(category);
    return dresses.filter((dress) => dress.category === category);
  }, [category]);

  return (
    <div className="productpage">
      <Sidebar defineCategory={defineCategory} />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {filteredDresses.map((dress) => {
          return (
            <Cards
              id={dress.id}
              key={dress.id}
              produktname={dress.productName}
              img={dress.image}
              // price={dress.preis}
              // material={dress.material}
              // produktbeschreibung={dress.produktbeschreibung}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default DressPage;
