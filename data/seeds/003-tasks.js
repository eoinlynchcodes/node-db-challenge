
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, taskDescription: 'Hoover the floor', notes: 'do it quickly', description:'It is important', completed: false, projectID: 1}
      ]);
    });
};
