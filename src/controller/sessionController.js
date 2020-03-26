const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const empresa = await connection('empresa')
            .where('id', id)
            .select('nome')
            .first();

            if (!empresa) {return response.status(400).json({ error: 'Empresa não encontrada.'})};
            
            return response.status(200).json({empresa:empresa})
    }
}