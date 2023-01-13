import { Router } from "express";
const router = Router();

import MovieController from "../controllers/MovieController.js";

/* GET movie listing. */
router.get("/", MovieController.getAll);
router.get("/:id", MovieController.getById);

export default router;
