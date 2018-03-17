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
        description: "Likes long walks on the beach.",
        picture: "../images/bob.jpeg",
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
        name: "Jane",
        description: "Plays a mean game of pool.",
        picture: "../images/jane.jpeg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.800790,
  lng: -122.473110,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')

    },{
        email:"eric@gmail.com",
        password: "pass",
        name: "Eric",
        description: "Aspiring CEO.",
        picture: "../images/erick.jpeg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.684778,
  lng: -122.476887,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"nick@gmail.com",
        password: "pass",
        name: "Nick",
        description: "Can juggle 5 balls.",
        picture: "/pic/Nick.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.751940,
  lng: -122.447477,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Alex@gmail.com",
        password: "pass",
        name: "Alex",
        description: "Goal is to read 50 new books this year.",
        picture: "/pic/alex.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.822208,
  lng: -122.280359,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Betty@gmail.com",
        password: "pass",
        name: "Betty",
        description: "I like turtles.",
        picture: "/pic/betty.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.891902,
  lng: -122.272254,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Alexia@gmail.com",
        password: "pass",
        name: "Alexia",
        description: "None of your business.",
        picture: "/pic/betty.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.891902,
  lng: -122.272254,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Cornelius@gmail.com",
        password: "pass",
        name: "Cornelius",
        description: "All of your base belongs to me.",
        picture: "/pic/betty.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.891902,
  lng: -122.272254,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Hannah@gmail.com",
        password: "pass",
        name: "Hannah",
        description: "I can beat you at Trivia.",
        picture: "/pic/betty.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.891902,
  lng: -122.272254,
}),
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
    },
    {
        email:"Roger@gmail.com",
        password: "pass",
        name: "Roger",
        description: "The greatest tennis player of all time.",
        picture: "/pic/betty.jpg",
        phone: "45234523",
        latlong: JSON.stringify({
  lat: 37.891902,
  lng: -122.272254,
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