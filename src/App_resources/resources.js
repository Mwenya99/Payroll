 const express = require ('express');
 const router = express.Router();
 const dotenv = require('dotenv');
 dotenv.config();

 module.exports = resources = {express, router, database: process.env.database, user: process.env.user, password: process.env.password, host: process.env.host, PORT: process.env.PORT};     
