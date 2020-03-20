const express = require("express");
const helmet = require("helmet");

// const db = require("./dbConfig");
const helpers = require('./helpers');

const server = express();

server.use(helmet());
server.use(express.json());

server.post('/resources', (req, res) => {
  // db('resources')
    helpers.addResource()
    .insert({
      id: 7,
      resourceName: "Truck",
      resourceDescription: "Scania R580"
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

server.get('/projects', (req, res) => {
  // db('projects')
  //   .select("*")
    helpers.getAllProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/resources/addTask', (req, res) => {
    helpers.addTask()
    .insert({ id: 2, taskDescription: 'Build Bike', notes: 'It needs to be ready for April.', description: 'It is for Tom Boonen', complete: false, projectID: 1 })
    .then(resources => {
        res.status(201).json(resources);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

server.get('/tasks', (req, res) => {
    // db('tasks')
    // .select('*')
    helpers.getTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(error => {
        res.status(500).json(error);
    });
})

server.get('/tasksProjectNameAndDescription', (req, res) => {
  helpers.getTaskProjectNameAndDescription()
  .then(task => {
    res.status(200).json(task);
  })
  .catch(error => {
    res.status(500).json(error);
  })
})

module.exports = server;
