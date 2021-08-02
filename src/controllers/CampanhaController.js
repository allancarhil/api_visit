const Campanha = require("../models/Campanha");

module.exports = {

    async index(req, res){
        const campanha = await Campanha.findAll();

        return res.json(campanha);
    },

    async store(request, response) {

        const { 
            canal, 
            propriedade, 
            oferta, 
            agendamento, 
            baseDeDados 
        } = request.body;

        const campanha = await Campanha.create({ 
            canal, 
            propriedade, 
            oferta, 
            agendamento, 
            baseDeDados 
        });

        return response.json(campanha);
    }
};