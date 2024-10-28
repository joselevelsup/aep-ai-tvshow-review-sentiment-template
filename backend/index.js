const express = require("express");
const app = express();

//We use the dotenv module to load the environment variables which will contain secrets
require("dotenv").config();

//Allows the server to parse JSON
app.use(express.json());

//Will contain all of our routes
app.use("/auth");
app.use("/reviews");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
