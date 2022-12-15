const express = require("express");
require("dotenv").config();
const db = require("./config/database");
const router = require("./router");

const app = express();

//middelware
app.use(express.json());

// routes
app.use(router);

const port = process.env.PORT || 3000;

db()
   .then(() => {
      app.listen(port, () => {
         console.log("Server is running: " + port);
      });
   })
   .catch((error) => {
      console.log("Error Connecting to mongoDB", error);
   });
