const knex = require('knex');
const configuration = require('../../knexfile');
require('dotenv').config();

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connect = knex(config);

module.exports = connect;