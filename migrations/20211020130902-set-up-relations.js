"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("responses", "languageId", {
      type: Sequelize.INTEGER,
      references: {
        model: "languages",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("responses", "languageId");
  },
};
