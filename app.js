const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { dirname } = require("path");

port = process.env.PORT || 9000;
const app = express();
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/home", (req, res, next) => {
  res.render("index");
});

// starting the server ;
app.listen(port, () => console.log(`app is starting on port ${port}`));
