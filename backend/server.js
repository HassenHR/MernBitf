const dotenv = require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const connect = require("./utils/db");
const userRoutes = require("./routes/userRoute");

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
connect();

const port = process.env.PORT || 5100;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000/", "http://myAppZ.vercel.app"],
    credentials: true,
  })
);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port);
