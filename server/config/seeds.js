const db = require('./connection');
const { User, Artwork } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Artwork', 'artwork');

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
    password: 'password12345',
  });

  console.log('users seeded');

const artwork = await Artwork.insertMany([
  {
    id: 1,
    title: 'Mona Lisa',
    image: 'mona-lisa.jpg',
    price: 860000000,
    artist: 'Leonardo Da Vinci',
  },
  {
    id: 2,
    title: 'Starry Night',
    image: 'starry-night.jpg',
    price: 70000000,
    artist: 'Vincent Van Gogh',
  },
  {
    id: 3,
    title: 'This Kiss',
    image: 'this-kiss.jpg',
    price: 36000,
    artist: 'Gustav Klimt',
  },
  {
    id: 4,
    title: 'The School of Athens',
    image: 'the-school-of-athens.webp',
    price: 6000,
    artist: 'Raphael',
  },
  {
    id: 5,
    title: 'Las Meninas',
    image: 'las-meninas.jpg',
    price: 4000000,
    artist: 'Diego Velázquez',
  },
  {
    id: 6,
    title: 'The birth of Venus',
    image: 'the-birth-of-venus.jpg',
    price: 500000000,
    artist: 'Sandro Botticelli',
  },
  {
    id: 7,
    title: 'Guernica',
    image: 'guernica.jpg',
    price: 200000000,
    artist: 'Pablo Picasso',
  },
])
process.exit()

})
