const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

//db setup

mongoose.connect("mongodb://mantvydas:auth@ds229008.mlab.com:29008/react-auth");

//app setup
app.use(morgan("combined")); //login server
app.use(bodyParser.json({ type: "*/*" }));
router(app);

//server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log("server listening on", port);
