const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const router = require("./router/routes");
const UserRouter = require("./router/userRouter");
const cookieParser = require("cookie-parser")
const cors = require("cors");




// Connect to the database
connectDB();
app.use(cookieParser());
app.use(cors());
app.use(express.static('uploads'));
app.use(express.urlencoded({extended : false}));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('uploads'));

// Route handling
app.use("/", router); 
app.use("/api/user" , UserRouter);

// Define a basic route
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
