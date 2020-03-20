-- To add a new resource
INSERT INTO resources (id, resourceName, resourceDescription)
    VALUES (3, 'Lawn Mower', 'Used In Summer to prevent grass growing too long.');


-- Retrieve a list of resources
SELECT * FROM resources; 
-- OR
SELECT * FROM resources where id=2;


-- Retrieve a list of projects
SELECT * FROM projects;
-- OR
SELECT * FROM projects where id = 2;

-- Adding a task

INSERT INTO resources (id, resourceName, resourceDescription)
    VALUES (4, 'Axe', 'For chopping firewood.');

-- Retrieve a list of tasks

SELECT * FROM tasks;

-- 6  retrieving a list of tasks. The list of tasks should include the project name and project description.
SELECT projects.projectName, projects.projectDescription, tasks.taskDescription FROM tasks
join projects on tasks.projectID = projects.id;
