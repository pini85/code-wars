const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const keys = require("./config/keys");

const statsRouter = require("./routes/stats");

const publicDirectoryPath = path.join(__dirname, "../client/build");
console.log(publicDirectoryPath);
app.use(express.static(publicDirectoryPath));

mongoose.connect(keys.mongoURI);

app.use(express.json());
app.use(cors());
app.use(statsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
