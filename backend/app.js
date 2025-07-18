const express = require("express");
const app = express();
const path = require("path");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports
// const product = require("./routes/productRoute");
const venue = require("./routes/venueRoute");
const user = require("./routes/userRoute");
const company = require("./routes/companyRoute");
const serviceDetail = require("./routes/serviceDetailRoute");
const formData = require("./routes/formRoutes.js");

// app.use("/api/z1",product);
app.use("/aak/l1", venue);
app.use("/aak/l1", user);
app.use("/aak/l1", company);
app.use("/aak/l1", formData);
app.use("/aak/l1", serviceDetail);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
