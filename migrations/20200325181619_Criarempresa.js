
exports.up = function(knex) {
    return knex.schema.createTable('empresa', function(table){
        table.increments();
        table.string('Nome').notNullable();
        table.string('endereço');
        table.string('cidade');
        table.string('Telefone');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('empresa');
};
