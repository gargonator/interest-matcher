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
    return queryInterface.bulkInsert('Users', [{
        email:"bob@gmail.com",
        password: "pass",
        name: "Bob",
        description: "desc",
        picture: "../images/bob.jpeg",
        phone: "45234523",
        latlong: "23142/412341",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },{
        email:"jane@gmail.com",
        password: "pass",
        name: "Jane",
        description: "desc",
        picture: "../images/jane.jpeg",
        phone: "45234523",
        latlong: "23142/412341",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    },{
        email:"Eric@gmail.com",
        password: "pass",
        name: "Eric",
        description: "desc",
        picture: "../images/erick.jpeg",
        phone: "45234523",
        latlong: "23142/412341",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },{
      email:"amy@gmail.com",
      password: "pass",
      name: "Amy",
      description: "desc",
      picture: "../images/amy.jpeg",
      phone: "45234523",
      latlong: "23142/412341",
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