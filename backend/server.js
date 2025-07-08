import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
// import dress from "./models/dress.model.js";
import dressRoutes from "./routes/dress.route.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: ["https://www.aegeansrosa.de", "https://aegeansrosa.de"],
    credentials: true
  })
);
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/dresses", dressRoutes);

app.listen(PORT, () => {
  connectDB();

  console.log(`Server is running on http://localhost:${PORT}`);
});
