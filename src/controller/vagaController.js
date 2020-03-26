const connection = require('../database/connection');

module.exports = {

    async create (request, Response ) {
        const {  Nome, endereço, cidade, Telefone, idempresa} = request.body;
        
        await connection('vagas').insert({
            Nome,
            endereço,
            cidade,
            Telefone,
            idempresa,
        });
    
        return response.json("vagas "+ Nome + " cadastrada com sucesso.");
    },

    async delete(request, response){
        const{id} = request.params;

        await connection('vagas').where('id', id).delete();

        return response.status(204).send();
    },
    
    async list (request, response) {
        const vagas = await connection('vagas').select('*');
        return response.json(vagas);
    }
}