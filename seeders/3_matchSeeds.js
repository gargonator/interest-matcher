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
    // return queryInterface.bulkInsert('Matches', [{
    //     matched_user:2,
    //     distance: 2,
    //     matched_interests:"movies, sports",
    //     UserId: 1,
    //     createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
    //     updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    // },{
    //     matched_user:3,
    //     distance: 2,
    //     matched_interests:"movies, sports",
    //     UserId: 1,
    //     createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
    //     updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    // },{
    //     matched_user:4,
    //     distance: 2,
    //     matched_interests:"movies, sports",
    //     UserId: 1,
    //     createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
    //     updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    // }], {});
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