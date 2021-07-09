
exports.up = function(knex) {
    return knex.schema.createTable('at_users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('login').notNullable();
        table.string('password').notNullable();
        table.string('image').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('at_users');
};
