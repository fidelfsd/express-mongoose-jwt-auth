import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
   return res.send("Bienevenidos a mi aplicación de tareas");
});

export default router;
