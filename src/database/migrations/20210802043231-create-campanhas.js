'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('campanhas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      canal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      propriedade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      oferta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agendamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      base_de_dados: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('campanhas');
  }
};
