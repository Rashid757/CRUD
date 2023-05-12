const express = require("express");
const bodyParser = require("body-parser");
const tutorialRoutes = require("./app/routes/routes.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/tutorials", tutorialRoutes);
