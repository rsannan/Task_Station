const express = require("express");
const dotenv = require("dotenv");
dotenv.config();


//catch uncaughtExceptions and uncaughtRejections
require("./startup/uncaughtError.startup")();

//Throw an exception if JWT_SECRET_KEY is 
//not provided in production mode
require("./startup/jwtException")();

const app = express();
require("./startup/middleware.startup")(app); //middleware
require("./startup/routes.startup")(app); //routes
require("./startup/connections.startup")(app); //port and database connection



