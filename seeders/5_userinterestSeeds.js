'use strict';

// creation of seeds array
var userinterest_seeds = [];
var id_counter = 1;

for (var i = 1; i <= 100; i++) {

    var userinterest_obj = {
        UserId: id_counter,
        InterestId: i,
        createdAt: '2018-03-14 02:10:55',
        updatedAt: '2018-03-14 02:10:55',
    }

    userinterest_seeds.push(userinterest_obj);

    if (i % 10 === 0) {
        id_counter++;
    }
}

// console.log(userinterest_seeds);

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
    return queryInterface.bulkInsert('UserInterest', userinterest_seeds, {});
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