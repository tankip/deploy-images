'use strict';

const Hapi = require('hapi');
const util = require('util'),
    spawn = require('child_process').spawn;

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8085
});

// Add the route
server.route({
    method: 'GET',
    path: '/deploy-images',
    handler: (request, reply) => {

        try {
            reply('ok');
        } catch (error) {
            console.error('An erro occured', error);
        }

    }
});
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello World');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});