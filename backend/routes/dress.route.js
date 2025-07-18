import express from "express";

import {
  testDB,
  createDress,
  deleteDress,
  getAllDresses,
  updateDress
} from "../controllers/dress.controller.js";
const router = express.Router();

router.get("/", getAllDresses);

router.post("/", createDress);

router.put("/:id", updateDress);

router.delete("/:id", deleteDress);

// router.get("/admin/migrate-images", adminAccess);

router.get("/test-db", testDB);

export default router;
