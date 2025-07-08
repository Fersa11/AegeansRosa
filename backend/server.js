import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
// import dress from "./models/dress.model.js";
import dressRoutes from "./routes/dress.route.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", // für lokale Entwicklung
      "https://www.aegeansrosa.de",
      "https://aegeansrosa.de"
    ],
    credentials: true
  })
);
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/dresses", (req, res, next) => {
  console.log("GET /api/dresses aufgerufen");
  next();
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
  });
});
