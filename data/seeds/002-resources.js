
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resourceName: 'Hoover', resourceDescription: 'Instead of brush.'},
        {id: 2, resourceName: 'Drum Key', resourceDescription: 'Used for tightening lugs.'}
      ]);
    });
};
