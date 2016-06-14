exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('uid');
    table.string('email');
    table.string('password').nullable();
    table.string('oauth').nullable();
    table.string('token').nullable();
    table.string('first_name');
    table.string('last_name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
