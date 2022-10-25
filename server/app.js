const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = 5000;
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());
app.use(require("./router/auth"));

require("./db/conn");
const User = require("./model/userSchema");
dotenv.config({path : './config.env'});

app.listen(5000, () =>{ 
    console.log(`server is running on port ${PORT}`);
});