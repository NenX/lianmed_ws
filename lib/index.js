"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var w3cwebsocket = require('websocket').w3cwebsocket;
var Server = require('websocket').server;
exports.Server = Server;
var Client = WebSocket || w3cwebsocket;
exports.Client = Client;
