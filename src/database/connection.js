const knex = requiere('knex');
const config = require('../../knexfile');

const connection = knex(config.development);

module.exports = connection;