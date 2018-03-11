'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Interests', [{
        interest:"sports",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },{
        interest:"movies",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    },{
        interest:"hiking",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    },{
        interest:"reading",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    },{
        interest:"culture",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },{
        interest:"museums",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};