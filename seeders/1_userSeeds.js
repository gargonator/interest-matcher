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
        name: "bob",
        description: "desc",
        picture: "/pic/bob.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
          lat: 37.792242,
          lng: -122.400648,
        }),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },{
        email:"jane@gmail.com",
        password: "pass",
        name: "jane",
        description: "desc",
        picture: "/pic/jane.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.818787,
  lng: -122.277881,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    },{
        email:"Eric@gmail.com",
        password: "pass",
        name: "Eric",
        description: "desc",
        picture: "/pic/eric.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 38.534315,
  lng: -121.481315,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"nick@gmail.com",
        password: "pass",
        name: "Nick",
        description: "desc",
        picture: "/pic/Nick.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.792242,
  lng: -122.400648,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Alex@gmail.com",
        password: "pass",
        name: "Alex",
        description: "desc",
        picture: "/pic/alex.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.818787,
  lng: -122.277881,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Betty@gmail.com",
        password: "pass",
        name: "Betty",
        description: "desc",
        picture: "/pic/betty.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 38.534315,
  lng: -121.481315,
}),
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