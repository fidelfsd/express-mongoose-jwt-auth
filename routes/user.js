import { Router } from "express";
const router = Router();

import UserController from "../controllers/UserController.js";
import isSuperAdmin from "../middelwares/isSuperAdmin.js";
import verifyToken from "../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
//router.get("/", UserController.getAll);

export default router;
