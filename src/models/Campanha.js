const { Model, DataTypes } = require('sequelize');

class Campanha extends Model {
    static init(sequelize) {
        super.init({
            canal: DataTypes.STRING,
            propriedade: DataTypes.STRING,
            oferta: DataTypes.STRING,
            agendamento: DataTypes.STRING,
            baseDeDados: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = Campanha;