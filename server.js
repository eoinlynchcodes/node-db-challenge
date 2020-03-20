const express = require('express');
const helmet = require('helmet');

const db = require('./dbConfig');

const server = express();

server.use(helmet);
server.use(express.json());

server.get('/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = server;