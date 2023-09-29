import express from "express";
import {
  listFilmFarts,
  getFilmFarts,
  editFilmFarts,
  addFilmFarts,
  deleteFilmFarts,
} from "../controllers/filmFarts.controllers.js";

const router = express.Router();

router.get("/", listFilmFarts);

router.get("/:id", getFilmFarts);

router.put("/:id", editFilmFarts);

router.post("/", addFilmFarts);

router.delete("/:id", deleteFilmFarts);

export default router;
