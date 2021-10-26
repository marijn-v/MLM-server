"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("languages", [
      {
        language: "Dutch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "Farsi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "Spanish",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "Polish",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "Portuguese",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "German",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "Italian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "Russian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        language: "English",
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
    await queryInterface.bulkDelete("languages", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
