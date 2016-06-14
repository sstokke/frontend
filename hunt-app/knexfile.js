module.exports = {
 development: {
   client: 'pg',
   connection: 'postgres://localhost/scavenger'
 },

 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL
 }
};
