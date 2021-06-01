const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

(async function () {
  try {
    app.listen(port, () => {
      console.log(`We are live on ${port}`);
    });
  } catch (err) {
    console.log(err.stack);
  }
})();
