import Cards from "../components/Cards";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

// import dresses from "../assets/DressesDB";
import { useEffect } from "react";
import { useDressStore } from "../store/dresses";
//
function Home() {
  const { fetchDresses, dresses } = useDressStore();

  useEffect(() => {
    fetchDresses();
  }, [fetchDresses]);
  // console.log("dresses:", dresses);

  return (
    <div className="productpage">
      <Sidebar />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {dresses.map((dress) => (
          <Cards
            id={dress._id}
            key={dress._id}
            produktname={dress.productName}
            produktbeschreibung={dress.productDescription}
            image={dress.image} // Display the first image
            price={dress.price}
            produktgroesse={dress.size}
            info={dress.careInstructions}
            material={dress.material}
            // category={dress.category} // Assuming category is available in the dress object
          />
        ))}
      </Box>
    </div>
  );
}

export default Home;
