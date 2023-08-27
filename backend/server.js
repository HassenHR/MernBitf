const express = require("express");
const dtenv = require("dotenv").config();
const app = express();
const userRoutes = require("./routes/userRoutes");
const blogsRoutes = require("./routes/blogRoutes");
const connectDB = require("./utils/db");
const cors = require("cors");

const port = process.env.PORT;
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", userRoutes);
app.use("/api/blogs", blogsRoutes);

app.listen(port);
