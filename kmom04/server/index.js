/**
 * Main program to run a simple server that says Hello World.
 *
 */
"use strict";

import server from "./server.js";
import serverUtility from "./serverUtility.js";


// Start the server to listen on a port
server.listen(serverUtility.getPort());

// Call function that saves processID.
serverUtility.saveServerPID();

console.log("Node.js server process, with ID: " + serverUtility.pid + " running on port: " + serverUtility.getPort());

console.log('Try routes / and /about and /whatever');

// Add server signal events.
serverUtility.addShutdownEvent("SIGTERM");
serverUtility.addShutdownEvent("SIGINT");
