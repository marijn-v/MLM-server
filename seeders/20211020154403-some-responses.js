"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("responses", [
      {
        expression: "Klootzak",
        translation: "Asshole",
        languageId: 1,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/klootzak_tl7ril.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Krijg de tering",
        translation: "Get tbc",
        languageId: 1,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/krijg_de_tering_udca1j.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Kuni (کیری)",
        translation: "Asshole",
        languageId: 2,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/kuni_eoztot.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Tokhmi (تخمی)",
        translation: "Dick",
        languageId: 2,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/tokhmi_tjodbj.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "La concha de tu madre",
        translation: "The pussy of your mom",
        languageId: 3,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/la_concha_de_tu_madre_dxwyhx.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Pajero",
        translation: "Wanker",
        languageId: 3,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/Pajero_zrdhdm.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Cerra el orto, pelotudo",
        translation: "Shut your ass, asshole",
        languageId: 3,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/Cerra_el_orto_pelotudo_rqczz0.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Spierdalaj huju jebany!",
        translation: "Fuck off, fucking dick",
        languageId: 4,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/Spierdalaj_huju_jebany_gln9o8.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vai tomar no cu!",
        translation: "Go put something in your ass",
        languageId: 5,
        audio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Te fuder",
        translation: "Fuck you",
        languageId: 5,
        audio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vai pro carolho",
        translation: "Go fuck yourself",
        languageId: 5,
        audio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Coloca o dedo no seu cu e roda",
        translation: "Put your finger in your ass and turn it",
        languageId: 5,
        audio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Dir hat wohl die Sonne das Gehirn verbrannt!",
        translation: "The sun must have burned your brain!",
        languageId: 6,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/Dir_hat_wohl_die_Sonne_das_Gehirn_verbrannt_lulmrg.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Lass mich in Ruhe du elendes Schwein!",
        translation: "Leave me alone you wretched pig!",
        languageId: 6,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/Lass_mich_in_Ruhe_du_elendes_Schwein_sykwqi.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Du hast wohl den Arsch offen!",
        translation: "You have your ass open!",
        languageId: 6,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/Du_hast_wohl_den_Arsch_offen_na5efk.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Verpiss dich du verficktes Arschgesicht!",
        translation: "Fuck off you fucking ass face!",
        languageId: 6,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/Verpiss_dich_du_verficktes_Arschgesicht_a6xkkv.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Paardelul",
        translation: "Horse cock",
        languageId: 1,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896790/paardelul_mfmk07.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Testa di cazzo",
        translation: "Dickhead",
        languageId: 7,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/Testa_di_cazzo_rojg18.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Stronzo",
        translation: "Asshole",
        languageId: 7,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/stronzo_etvjjw.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Vaffanculo",
        translation: "Go fuck yourself",
        languageId: 7,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/vaffanculo_y7ubqz.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Coglione",
        translation: "Moron",
        languageId: 7,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/coglione_wd1p4n.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Pezzo di merda",
        translation: "Piece of shit",
        languageId: 7,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634896791/pezzo_di_merda_tjclbq.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Idzi nachuj",
        translation: "Go fuck yourself",
        languageId: 8,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634900400/Idzi_nachuj_wnxdjb.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Pozhel v zhopu",
        translation: "Go fuck yourself",
        languageId: 8,
        audio:
          "https://res.cloudinary.com/dpc6rgqzd/video/upload/v1634900400/Pozhel_v_zhopu_qwxpga.mp3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Narrøv",
        translation: "Idiot",
        languageId: 9,
        audio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Røvhul",
        translation: "Asshole",
        languageId: 9,
        audio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Dumme svin",
        translation: "Stupid pig",
        languageId: 9,
        audio: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        expression: "Klamme Stodder",
        translation: "Loser",
        languageId: 9,
        audio: "",
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
