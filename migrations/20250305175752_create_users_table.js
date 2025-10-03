
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
      table.increments('id').primary(); // Auto-incrementing primary key
      table.string('name').notNullable(); // User's name
      table.string('email').notNullable().unique(); // Unique email
      table.string('password').notNullable(); // Password
      table.timestamps(true, true); // Adds created_at and updated_at columns
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users'); // Rollback: drop the table
  };