import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import helmet from "helmet";
import dressRoutes from "./routes/dress.route.js";

const app = express();

// Sicherheits-Header global aktivieren
app.use(helmet());

// Cache-Control Header für alle Routen in diesem Router
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=3600"); // 1 Stunde Cache
  next();
});

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", // für lokale Entwicklung (Vite)
      "https://www.aegeansrosa.de",
      "https://aegeansrosa.de"
    ],
    credentials: true
  })
);

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/dresses", dressRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
  });
});
