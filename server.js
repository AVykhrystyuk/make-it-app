'use strict';

const express = require("express"),
    compression = require('compression');

const app = express();

app.use(compression());
app.use(express.static('./build'));

const config = buildOpenshiftConfig();
app.listen(config.port, config.ipAddress, function() {
    var url = `http://${config.ipAddress}:${config.port}`;
    console.log(`Your server is listening on port ${config.port} (${url})`);
});


function buildConfig() {
    return {
        ipAddress: "127.0.0.1",
        port: process.env.PORT || 3000
    };
}

function buildOpenshiftConfig() {
    let ip = process.env.OPENSHIFT_NODEJS_IP;
    let port = process.env.OPENSHIFT_NODEJS_PORT;

    let config = buildConfig();
    if (ip) {
        config.ipAddress = ip;
    } else {
        console.warn(`No OPENSHIFT_NODEJS_IP var, using ${config.ipAddress}`)
    }

    if (port) {
        config.port = port;
    };

    return config;
}