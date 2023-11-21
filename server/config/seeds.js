const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Product', 'products');
  await cleanDB('Category', 'categories');


  const categories = await Category.insertMany([
    { name: 'Contemporary' },
    { name: 'Modern' },
    { name: 'Classic' },
  ]);
  console.log('categories seeded');



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
    password: 'password123456',
  });

  console.log('users seeded');

const products = await Product.insertMany([
  {
    id: 1,
    title: 'Mona Lisa',
    image: 'mona-lisa.jpg',
    price: 860000000.00,
    artist: 'Leonardo Da Vinci',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 2,
    title: 'Starry Night',
    image: 'starry-night.jpg',
    price: 70000000.00,
    artist: 'Vincent Van Gogh',
    category: categories[1]._id,
    quantity: 5,
  },
  {
    id: 3,
    title: 'This Kiss',
    image: 'this-kiss.jpg',
    price: 36000.00,
    artist: 'Gustav Klimt',
    category: categories[2]._id,
    quantity: 5,
  },
  {
    id: 4,
    title: 'The School of Athens',
    image: 'the-school-of-athens.webp',
    price: 6000.00,
    artist: 'Raphael',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 5,
    title: 'Las Meninas',
    image: 'las-meninas.jpg',
    price: 40000.00,
    artist: 'Diego Velázquez',
    category: categories[1]._id,
    quantity: 5,
  },
  {
    id: 6,
    title: 'The birth of Venus',
    image: 'the-birth-of-venus.jpg',
    price: 500000000.00,
    artist: 'Sandro Botticelli',
    category: categories[2]._id,
    quantity: 5,
  },
  {
    id: 7,
    title: 'Guernica',
    image: 'guernica.jpg',
    price: 200000000.00,
    artist: 'Pablo Picasso',
    category: categories[0]._id,
    quantity: 5,
  },
]);

console.log('users seeded');

process.exit()

});
