import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCategoryStore } from "../store/catagory";
// ...other imports...
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import { useMemo } from "react";
import Sidebar from "../components/Sidebar";
import { useDressStore } from "../store/dresses";
// import dresses from "../assets/DressesDB";

function DressPage() {
  const { category: categoryParam } = useParams();
  const setCategory = useCategoryStore((state) => state.setCategory);
  const category = useCategoryStore((state) => state.category);
  const { fetchDresses, dresses } = useDressStore();
  // Sync Zustand store with URL param
  useEffect(() => {
    fetchDresses();
    if (categoryParam && categoryParam !== category) {
      setCategory(categoryParam);
    }
  }, [categoryParam, category, setCategory]);
  // console.log("Current category:", category);
  // console.log("Dresses:", dresses);

  const filteredDresses = useMemo(() => {
    return dresses.filter((dress) => dress.category === category);
  }, [category]);

  return (
    <div className="productpage">
      <Sidebar />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {filteredDresses.map((dress) => (
          <Cards
            id={dress.id}
            key={dress.id}
            produktname={dress.productName}
            img={dress.image}
            price={dress.price}
            produktgroesse={dress.size}
            info={dress.careInstructions}
            material={dress.material}
          />
        ))}
      </Box>
    </div>
  );
}

export default DressPage;
