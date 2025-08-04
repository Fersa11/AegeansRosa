import express from "express";

import {
  // createDress,
  // deleteDress,
  getAllDresses
  // updateDress
} from "../controllers/dress.controller.js";
const router = express.Router();

// router.use((req, res, next) => {
//   res.setHeader("Cache-Control", "public, max-age=3600"); // 1 Stunde Cache
//   next();
// });

router.get("/", getAllDresses);

// router.post("/", createDress);

// router.put("/:id", updateDress);

// router.delete("/:id", deleteDress);

// router.get("/admin/migrate-images", adminAccess);

// router.get("/test-db", testDB);

export default router;
