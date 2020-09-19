const knex = require("knex");

const knexConfig = require("../knexfile");

const configuration = knex(knexConfig.development);

module.exports = configuration;
