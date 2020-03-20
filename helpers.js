const db = require('./dbConfig');

module.exports = {
    addResource,
    getAllResources,
    getAllProjects,
    getTasks,
    getTaskProjectNameAndDescription
}

function addResource(resource){
    return db('resources')
    .insert(resource)
}

function getAllResources(){
    return db('resources')
}

function getAllProjects(){
    return db('projects')
}

// function addTask('task'){
//     return db('tasks')
//     .insert(task)
// }

function getTasks(){
    return db('tasks')
}

function getTaskProjectNameAndDescription(){
    return db('tasks')
    .select('projects.projectName', 'projects.projectDescription', 'tasks.taskDescription')
    .join('projects', {'tasks.projectID': 'project.id'})
}