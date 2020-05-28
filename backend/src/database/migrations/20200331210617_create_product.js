exports.up = function(knex) {
  return knex.schema.createTable("product", function(table) {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("descricao").notNullable();
    table.string("modelo").notNullable();
    table.string("marca").notNullable();
    table.decimal("tamanho").notNullable();
    table.decimal("valor").notNullable();
    table.decimal("quantidade").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("product");
};
