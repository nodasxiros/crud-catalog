'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Beers', [
     {
       name: 'Punk IPA',
       type: 'IPA',
       country: 'United Kingdom',
     },
     {
      name: 'Guinness Draught',
      type: 'Stout',
      country: 'Ireland',
    },
    {
      name: 'Stella Artois',
      type: 'Lager',
      country: 'France',
    },{
      name: 'Amstel',
      type: 'Lager',
      country: 'Netherlands',
    },
    {
      name: 'Kathimerini',
      type: 'Lager',
      country: 'Greece',
    },
    {
      name: 'Nimfi',
      type: 'Pilsner',
      country: 'Greece',
    },
    {
      name: 'Budweiser',
      type: 'Lager',
      country: 'United States',
    },
    {
      name: 'Foster',
      type: 'Lager',
      country: 'Australia',
    },
    {
      name: 'Vergina',
      type: 'Lager',
      country: 'Greece',
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Beer', null, {});
  }
};
