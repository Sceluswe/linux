/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

const fs = require("fs");
var url = require('url');

var routes = {};

routes.endText = (res, data) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(data);
};

routes.endJSON = (res, data) => {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

    // Converts the Javascript-object to a string to be sent to the client
    var jsonObj = JSON.stringify(data);

    // End the respons with the new string
    res.end(jsonObj + "\n");
};

routes.home = (res) => {
    // Home page route.
    routes.endText(res, "Hello World!\n");
};

routes.about = (res) => {
    // About page route.
    routes.endText(res, 'About\n');
};

routes.index = (res) => {
    // Index route.
    let data = fs.readFileSync('index.html', 'utf8');
    routes.endText(res, data);
};

// Takes a command and prints it as a json file.
routes.command = (res) => {
    let child = require("child_process");

    // Execute a child process.
    child.exec('uname', (error, stdout, stderr) => {
        if (error || stderr) {
            // Do something with the error(s)
            console.log("Something went wrong...", error, stderr);
        }

        let data = { 'uname': stdout.replace(/\r?\n|\r/, "") };

        routes.endJSON(res, data);
    });
};

routes.sum = (req, res) => {
    // Get the querystring from the url and split it into parts.
    let urlParts = url.parse(req.url, true);
    let query = urlParts.query;
    let sum = 0;

    Object.keys(query).forEach( (element, key) => {
        //console.log("number: " + query[key]);
        console.log("number[" + key + "]: " + element);

        if (isNaN(element) === false) {
            sum = sum + parseInt(element);
        }
    });

    let data = { 'sum': sum };

    routes.endJSON(res, data);
};

routes.filter42 = (req, res) => {
    // Get the querystring from the url and split it into parts.
    let urlParts = url.parse(req.url, true);
    let query = urlParts.query;
    let numbers = [];

    Object.keys(query).forEach( (element, key) => {
        //console.log("number: " + query[key]);
        console.log("number[" + key + "]: " + element);

        if (isNaN(element) === false) {
            if (element < 42) {
                numbers.push(parseInt(element));
            }
        }
    });

    let data = { 'filter': numbers };

    routes.endJSON(res, data);
};

routes.default = (res) => {
    // Not found route.
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404. The resource does not exists\n');
};




// Export as a module
export default routes;
