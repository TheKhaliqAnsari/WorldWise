const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: [".env"] });
const { port, db_url } = require("./config/config");
const route = require('./routes/index');
app.use(express.json());
app.use('/v1', route);

mongoose.connect(db_url).then((data) => {
  console.log("DB Connected successfully to: ", db_url);
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});
