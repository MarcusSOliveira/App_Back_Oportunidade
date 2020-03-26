
exports.up = function(knex) {
    return knex.schema.createTable('vagas', function(table){
        table.increments();
        table.string('Descricao').notNullable();
        table.string('Hieraquia');
        table.decimal('Valor');

        table.integer('Empresaid').notNullable();
        table.foreign('Empresaid').references('id').inTable('empresa');
        
    });
};

exports.down = function(knex) {    
    return knex.schema.dropTable('vagas');
  
};
