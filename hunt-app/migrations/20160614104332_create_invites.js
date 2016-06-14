exports.up = function(knex, Promise) {
  return knex.schema.createTable('invites', function(table){
    table.increments();
    table.integer('hunt_id')
      .references('id')
      .inTable('hunts');
    table.string('email');
    table.integer('user_id')
      .references('uid')
      .inTable('users');
    table.date('rsvp_by');
    table.string('rsvp').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('invites');
};
