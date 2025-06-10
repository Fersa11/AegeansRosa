import express from "express";

import {
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

export default router;
