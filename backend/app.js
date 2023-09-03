const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use(express.json());
app.use(cors());

const url = "mongodb://127.0.0.1:27017/taskmanagerApp" ;
mongoose.set("strictQuery", false);
const connectDB = mongoose.connect(url)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, "../frontend/build")));
//   app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")));
// }

const port = 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
