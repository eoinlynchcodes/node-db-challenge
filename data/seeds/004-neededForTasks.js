
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('neededForTasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('neededForTasks').insert([
        {id: 1, resourceID: 1, projectID: 1},
        {id: 2, resourceID: 2, projectID: 2}
      ]);
    });
};
