const Campanha = require("../models/Campanha");

module.exports={

    async store(request,response){

        const {canal,propriedade,oferta,agendamento,base_de_dados }=request.body;

        const campanha=await Campanha.create({ canal, propriedade,oferta,agendamento,base_de_dados });

        return response.json(campanha);
    }
}; 