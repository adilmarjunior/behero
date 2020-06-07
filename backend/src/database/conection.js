const knex = require('knex');
const configurarion = require('../../knexfile');

const connection = knex(configurarion.staging);

module.exports = connection;