"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("responses", [
      {
        expression: "Klootzak",
        translation: "Asshole",
        languageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Krijg de tering",
        translation: "Get tbc",
        languageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Kiri (کیری)",
        translation: "Dick",
        languageId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "La concha de tu madre",
        translation: "The pussy of your mom",
        languageId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Pajero",
        translation: "Wanker",
        languageId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Cerra el orto, pelotudo",
        translation: "Shut your ass, asshole",
        languageId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Spierdalaj huju jebany!",
        translation: "Fuck off, fucking dick",
        languageId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vai tomar no cu!",
        translation: "Go put something in your ass",
        languageId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Te fuder",
        translation: "Fuck you",
        languageId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vai pro carolho",
        translation: "Go fuck yourself",
        languageId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Coloca o dedo no seu cu e roda",
        translation: "Put your finger in your ass and turn it",
        languageId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Dir hat wohl die Sonne das Gehirn verbrannt!",
        translation: "The sun must have burned your brain!",
        languageId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Lass mich in Ruhe du elendes Schwein!",
        translation: "Leave me alone you wretched pig!",
        languageId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Du hast wohl den Arsch offen!",
        translation: "You have your ass open!",
        languageId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Verpiss dich du verficktes Arschgesicht!",
        translation: "Fuck off you fucking ass face!",
        languageId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Paardelul",
        translation: "Horse cock",
        languageId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Testa di cazzo",
        translation: "Dickhead",
        languageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Stronzo",
        translation: "Asshole",
        languageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vaffanculo",
        translation: "Go fuck yourself",
        languageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Coglione",
        translation: "Moron",
        languageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Pezzo di merda",
        translation: "Piece of shit",
        languageId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Idzi nachuj",
        translation: "Go fuck yourself",
        languageId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Pozhel v zhopu",
        translation: "Go fuck yourself",
        languageId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Narrøv",
        translation: "Idiot",
        languageId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Røvhul",
        translation: "Asshole",
        languageId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Dumme svin",
        translation: "Stupid pig",
        languageId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Klamme Stodder",
        translation: "Loser",
        languageId: 9,
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
