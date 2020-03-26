const connection = require('../database/connection');

module.exports = {

    async indexedDB(request, response){
        const { page = 1 } = request.body;
        const [total_vagas] = await connection('vagas').count();

        const oportunidades = await connection('empresas')
            .join('vagas', 'vagas.Empresaid', '=', 'empresa.id')
            .join('recrutador', 'recrutador.Empresaid', '=', 'empresa.id')
            .limit(5)
            .offset((page-1)*5)
            .select(['empresa.Nome', 
                     'empresa.endereço', 
                     'empresa.cidade', 
                     'vagas.Descricao',
                     'vagas.Hieraquia', 
                     'vagas.Valor' ,
                     'recrutador.nome',
                     'recrutador.whatapp',
                     'recrutador.email'
                    ]);
        response.header('total_vagas', total_vagas['count(*)'])            
        return response.json(oportunidades);


    }

}