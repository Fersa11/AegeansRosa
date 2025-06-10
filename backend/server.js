import express from "express";
import connectDB from "./config/db.js";

// import dress from "./models/dress.model.js";
import dressRoutes from "./routes/dress.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/dresses", dressRoutes);

app.listen(PORT, () => {
  connectDB();

  console.log(`Server is running on http://localhost:${PORT}`);
});
