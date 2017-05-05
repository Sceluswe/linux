/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";


const path = require("path");
const fs = require("fs");

var serverUtility = {};

// Returns the LINUX_PORT or a default port value.
serverUtility.getPort = function () {
    // Set port default value.
    var port = 11;

    // Read the LINUX_PORT environment variabel and see if it's defined.
    if ("LINUX_PORT" in process.env) {
        try {
            port = process.env.LINUX_PORT;
            port = parseInt(port);
        }
        catch (err) {
            console.log(err.message);
        }
        console.log("port variable:" + port);
        console.log("env variable" + process.env.LINUX_PORT);
    }

    return port;
};

// Saves the processID to a file.
serverUtility.saveServerPID = () => {
    // Save file to module.
    serverUtility.pidFile = path.join(__dirname, "pid");

    // Save process id in module.
    serverUtility.pid = process.pid;

    fs.writeFile(serverUtility.pidFile, process.pid, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Wrote process id to file 'pid'");
    });
};


/**
 * Listen on SIGINT, SIGTERM
 */
serverUtility.controlledShutdown = (signal) => {
    console.warn(`Caught ${signal}. Removing pid-file and will then exit.`);
    fs.unlinkSync(serverUtility.pidFile);
    process.exit();
};

// Add event handlers for signals
serverUtility.addShutdownEvent = (str_signal) => {
    process.on(str_signal, () => {
        serverUtility.controlledShutdown(str_signal);
    });
};


// Export as a module
export default serverUtility;
