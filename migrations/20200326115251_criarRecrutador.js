
exports.up = function(knex) {
  
    return knex.schema.createTable('recrutador', function(table){
        table.increments();
        table.string('Nome').notNullable();
        table.string('whatapp');
        table.string('Email');

        table.integer('empresaid').notNullable();
        table.foreign('empresaid').references('id').inTable('empresa');
                
    });
};

exports.down = function(knex) {    
    return knex.schema.dropTable('recrutador');
}