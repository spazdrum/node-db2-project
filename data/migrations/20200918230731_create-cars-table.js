exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("VIN", 255).notNullable().index();
    tbl.string("Make", 255).notNullable().index();
    tbl.string("Model", 255).notNullable().index();
    tbl.string("Mileage", 255).index();
    tbl.string("Transmission", 255).notNullable();
    tbl.string("Title", 255).defaultTo("No Information Provided.");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
