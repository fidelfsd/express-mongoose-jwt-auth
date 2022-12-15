const router = require("express").Router();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user");
const authRouter = require("./routes/auth");

// routes
router.use("/", indexRouter);
router.use("/users", usersRouter);

// auth
router.use("/auth", authRouter);

module.exports = router;
