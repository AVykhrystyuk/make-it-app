'use strict';

const express = require("express"),
    path = require('path'),
    compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static(path.resolve('build')));

app.listen(process.env.PORT || 3000, function() {
    let address = this.address();
    console.log(address);
    let url = `http://localhost:${address.port}`;
    console.log(`Server listening on port ${address.port} (${url})`);
});