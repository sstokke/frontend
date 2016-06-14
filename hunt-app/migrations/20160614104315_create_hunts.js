exports.up = function(knex, Promise) {
  return knex.schema.createTable('hunts', function(table){
    table.increments();
    table.string('hunt_name');
    table.date('date');
    table.time('start_time');
    table.time('end_time');
    table.string('general_location');
    table.string('general_description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hunts');
};
