"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("responses", [
      {
        expression: "Klootzak",
        translation: "Asshole",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Krijg de tering",
        translation: "Get tbc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: " Kiri (کیری)",
        translation: "Dick",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "La concha de tu madre",
        translation: "The pussy of your mom",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Pajero",
        translation: "Wanker",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Cerra el orto, pelotudo",
        translation: "Shut your ass, asshole",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Spierdalaj huju jebany!",
        translation: "Fuck off, fucking dick",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vai tomar no cu!",
        translation: "Go put something in your ass",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Te fuder",
        translation: "Fuck you",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vai pro carolho",
        translation: "Go fuck yourself",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Coloca o dedo no seu cu e roda",
        translation: "Put your finger in your ass and turn it",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Dir hat wohl die Sonne das Gehirn verbrannt!",
        translation: "The sun must have burned your brain!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Lass mich in Ruhe du elendes Schwein!",
        translation: "Leave me alone you wretched pig!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Du hast wohl den Arsch offen!",
        translation: "You have your ass open!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Verpiss dich du verficktes Arschgesicht!",
        translation: "Fuck off you fucking ass face!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Paardelul",
        translation: "horse cock",
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
    await queryInterface.bulkDelete("responses", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
