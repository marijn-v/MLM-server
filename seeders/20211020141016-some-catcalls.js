"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("catcalls", [
      {
        expression:
          "Whooooooooh, baby! Aye, how bout you bring your fine ass ova here and let me explore your candy land, sugar-tits!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression:
          "You look good in that outfit. I bet you'd look better out of it.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression:
          "I'm getting really horny from your smile... you really are a VIP escort girl!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "You better learn to answer a man when he speaks to you!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Let me be your Harvey Weinstein!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression:
          "Hey! My girlfriend has that dress, but you wear it better!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Screw the gym, baby, I’ll give you a workout.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "It will be so good, you won't want to call it rape.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "I like the way you lick that icecream.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Call me when you are legal, doll!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("catcalls", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
