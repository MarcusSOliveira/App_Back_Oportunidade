const connection = require('../database/connection');

module.exports = {

    async create (request, Response ) {
        const {  nome, whatapp, email, empresaid } = request.body;        
        
        await connection('recrutador').insert({
            nome,
            whatapp,
            email,
            empresaid,            
        });
    
        return response.json("Recrutador(a) "+ Nome + " cadastrado com sucesso.");
    },

    async delete(request, response){
        const{id} = request.params;

        await connection('recrutador').where('id', id).delete();

        return response.status(204).send();
    },
    
    async list (request, response) {
        const recrutador = await connection('recrutador').table();
        return response.json(recrutador);
    }
}
