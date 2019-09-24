#!/usr/bin/env node

const express = require("express");

const config = require("./config");
const routes = require("./routes/routes");
const Autosync = require("./background/autosync");

const app = express();
const autosync = new Autosync();

routes.register(app);

app.listen(config.get("port"));

autosync.start();

console.log(` ____  ____   __   __ _  ____  _  _
/ ___)(  _ \\ / _\\ (  ( \\(    \\( \\/ )
\\___ \\ ) __//    \\/    / ) D ( )  (
(____/(__)  \\_/\\_/\\_)__)(____/(_/\\_)
`);
console.log(`Running with configuration:\n`);
console.log(config.toString());
console.log();
console.log(`Listening on http://${config.get("host")}:${config.get("port")}`);
