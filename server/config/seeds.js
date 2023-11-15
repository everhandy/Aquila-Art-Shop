const db = require('./connection');
const { User, Artwork } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Artwork', 'artwork');


const artwork = await Artwork.insertMany([
  {
    title: 'Mona Lisa',
    image: '',
    price: 860000000,
    artist: 'Leonardo Da Vinci',
  },
  {
    title: 'Starry Night',
    image: '',
    price: 70000000,
    artist: 'Vincent Van Gogh',
  },
  {
    title: 'This Kiss',
    image: '',
    price: 36000,
    artist: 'Gustav Klimt',
  },
  {
    title: 'The School of Athens',
    image: '',
    price: 6000,
    artist: 'Raphael',
  },
])



















await User.create({
    firstName: 'Test',
    lastName: 'Tester',
    email: 'test@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Testtwo',
    lastName: 'Testertwo',
    email: 'testtwo@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
