const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
require("dotenv").config();

// require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
// app.use(require("./routes/post"));

mongoose.connect(MONGOURI);

mongoose.connection.on("connected", () => {
  console.log("Connectd to MONGODB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error in connection", err);
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on ", process.env.PORT);
});
