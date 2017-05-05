/**
 * Server with routes.
 * URLS:
 *  localhost:1337/     - home.
 *  localhost:1337/about - about page.
 *  localhost:1337/*    - 404 page.
 */
"use strict";

import routes from "./routes.js";

var http = require('http');
var url = require('url');



var server = http.createServer((req, res) => {
    var ipAddress, route;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    route = url.parse(req.url).pathname;
    console.log("Incoming route " + route + " from ip " + ipAddress);


    // Switch (route) on the path.
    switch (route) {
        case "/":
            routes.home(res);
        break;

        case "/about":
            routes.about(res);
        break;

        case "/index.html":
            routes.index(res);
        break;

        case "/status":
            routes.command(res);
        break;

        case "/sum":
            routes.sum(req, res);
        break;

        case "/filter":
            routes.filter42(req, res);
        break;

        default:
            routes.default(res);
        break;
    }
});

// Export the server as a module.
export default server;
