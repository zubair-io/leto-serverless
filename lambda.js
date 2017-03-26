'use strict';
const awsServerlessExpress = require('aws-serverless-express');
const app = require('././dist/server/server');
const server = awsServerlessExpress.createServer(app);
module.exports.leto = (event, context) => awsServerlessExpress.proxy(server, event, context);