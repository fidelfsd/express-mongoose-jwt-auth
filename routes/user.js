var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");
const isSuperAdmin = require("../middelwares/isSuperAdmin");
const verifyToken = require("../middelwares/verifyToken");

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);

module.exports = router;
