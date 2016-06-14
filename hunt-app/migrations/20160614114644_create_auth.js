exports.up = function(knex, Promise) {
  return knex.schema.createTable('auth', function(table){
      table.increments();
      table.integer('hunt_id')
        .references('id')
        .inTable('hunts');
      table.integer('user_id')
        .references('uid')
        .inTable('users');
      table.string('permissions');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('auth');
};
