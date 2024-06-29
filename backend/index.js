const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Importing routes
const signRoute = require("./routers/sign");
const loginRoute = require("./routers/log");
const uploadRoute = require("./routers/upload");
const articleRoute = require("./routers/article")



const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Connect to MongoDB (assuming db/conn.js handles this)
require("./db/conn");

// Custom middleware function (example)
function myMiddleware(req, res, next) {
    // Your middleware logic here
    next();
}
app.use(myMiddleware);

// Routes
app.use("/SignUp", signRoute);
app.use("/Login", loginRoute);
app.use("/api", uploadRoute);
app.use("/api",articleRoute)



// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
