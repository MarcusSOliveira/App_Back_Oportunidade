const connection = require('../database/connection');

module.exports = {

    async create (request, Response ) {
        const {  Nome, endereço, cidade, Telefone} = request.body;
        
        await connection('empresa').insert({
            Nome,
            endereço,
            cidade,
            Telefone,
        });
    
        return response.json("Empresa "+ Nome + " cadastrada com sucesso.");
    },


    async delete(request, response){
        const{id} = request.params;
        const ExisteVaga = await connection('vagas')
              .where('idempresa', id)
              .first();
        if ( ExisteVaga ){return response.status(401).json({error:"Vaga assossiada a empresa "})};
        
        ExisteRecrutador = await connection('recrutador')
              .where('idempresa', id)  
              .first();
        if ( ExisteRecrutador ){return response.status(401).json({error:"Recrutador assossiado a empresa "})};

        await connection('empresa').where('id', id).delete();

        return response.status(204).send();

    },
    
    async list (request, response) {
        const empresas = await connection('empresa').table();    
        return response.json(empresas);    
    }
}

