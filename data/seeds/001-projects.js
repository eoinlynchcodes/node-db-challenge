
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, projectName: 'Tidy Room', projectDescription: 'Need to tidy room to find things faster.'},
        {id: 2, projectName: 'Build Drum Kit', projectDescription: 'I want to play drums. Build the kit.'},
      ]);
    });
};
