const express = require("express");
const dtenv = require("dotenv").config();
const app = express();
const transactionRoutes = require("./routes/transactionRoutes");
const connectDB = require("./utils/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const transactionModel = require("./models/transactionModel");

const port = process.env.PORT;
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/transaction", transactionRoutes);

app.listen(port);
