const knex = require('./knex');

module.exports = {
  hunts:  function hunts() {
   return knex('hunts');
   }

 }
