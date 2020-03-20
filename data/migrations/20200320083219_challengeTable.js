
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments('id')
      table.string('projectName', 128).unique().notNullable()
      table.string('projectDescription').notNullable()
  })
  .createTable('resources', table => {
      table.increments('id')
      table.string('resourceName').notNullable()
      table.string('resourceDescription').notNullable()   
})
.createTable('tasks', table => {
    table.increments('id')
    table.string('taskDescription').notNullable()
    table.string('notes')
    table.string('description')
    table.boolean('completed')
    table.integer('projectID')
    .references('id')
    .inTable('projects')
    .onDelete('RESTRICT')
    .onUpdate('RESTRICT')
})
.createTable('neededForTasks', table => {
        table.increments()
        table.integer('resourceID')
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        table.integer('projectID')
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('Projects')
  .dropTableIfExists('Resources')
  .dropTableIfExists('Tasks')
  .dropTableIfExists('NeededForTasks')
};
