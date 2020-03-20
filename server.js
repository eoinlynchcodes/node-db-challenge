const express = require("express");
const helmet = require("helmet");

const db = require("./dbConfig");
const helpers = require('./helpers');

const server = express();

server.use(helmet());
server.use(express.json());

server.post('/resources', (req, res) => {
  db("resources")
    .insert({
      id: 5,
      resourceName: "Guitar",
      resourceDescription: "Used to write songs"
    })
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get('/resources', (req, res) => {
  helpers.getAllResources()
  .then(resources => {
      res.status(201).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get("/projects", (req, res) => {
  db('projects')
    .select("*")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/resources', (req, res) => {
    db('resources')
    .insert({ id: 4, resourceName: 'Spanner', resourceDescription: 'For opening bolts.' })
    .then(resources => {
        res.status(201).json(resources);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

server.get('/tasks', (req, res) => {
    db('tasks')
    .select('*')
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(error => {
        res.status(500).json(error);
    });
})

module.exports = server;
