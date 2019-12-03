const games = [
  { 
    id: 1, 
    name: 'Sly Cooper and the Thievius Raccoonus', 
    platform: [
      'Playstation 2', 
      'Playstation 3'
    ], 
    developer: [
      'Sucker Punch Productions',
      'Sanzaru Games'
    ], 
    publisher: 'Sony Interactive Entertainment', 
    released: new Date('2002-09-23'), 
    moreInfo: 'https://slycooper.fandom.com/wiki/Sly_Cooper_and_the_Thievius_Raccoonus'
  },
  { 
    id: 2, 
    name: 'Sly 2: Band of Thieves', 
    platform: [
      'Playstation 2', 
      'Playstation 3'
    ], 
    developer: [
      'Sucker Punch Productions',
      'Sanzaru Games'
    ], 
    publisher: 'Sony Interactive Entertainment', 
    released: new Date('2004-09-14'), 
    moreInfo: 'https://slycooper.fandom.com/wiki/Sly_2:_Band_of_Thieves'}
];

const characters = [
  { 
    id: 1, 
    name: 'Sly Cooper', 
    born: 1984, 
    inGames: [
      GAMES.entries[1], 
      GAMES.entries[2]
    ], 
    species: 'Raccoon', 
    relationship: null, 
    weapon: null, 
    voicedBy: null, 
    moreInfo: null
  }
];

const weapons = [
  {
    id: 1, 
    name: 'Cane', 
    inGame: [
      GAMES.entries[1]
    ], 
    users: [
      CHARACTERS.entries[1]
    ],
    type: 'Melee', 
    moreInfo: null
  }
];

const voiceActors = [
  {
    id: 1, 
    name: 'Kevin Miller', 
    birthday: new Date(1977-12-21), 
    voiceFor: [
      CHARACTERS.entries[1]
    ], 
    moreInfo: null
  }
];

const data = { heroes: heroes, villains: villains, games: games, characters: characters, voiceActors: voiceActors, weapons: weapons };

module.exports = data;
