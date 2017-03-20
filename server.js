'use strict';

const express = require("express"),
    compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static('./public'));
// app.get("/", function(request, response){
//     response.end("Hello from Express!");
// });

const serverPort = 3000;
app.listen(serverPort, function () {
    console.log(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`);
});