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
    return queryInterface.bulkInsert('Favorites', [{
        favorited_user:2,
        UserId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },{
        favorited_user:3,
        UserId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    },{
        favorited_user:4,
        UserId: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    }], {});
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