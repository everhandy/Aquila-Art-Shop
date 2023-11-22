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
    username: 'Test',
    email: 'test@testmail.com',
    password: 'password12345',
  });

  await User.create({
    username: 'Testtwo',
    email: 'testtwo@testmail.com',
    password: 'password123456',
  });

  console.log('users seeded');

const products = await Product.insertMany([
  {
    id: 1,
    title: 'Noir Stroke',
    image: 'https://i.imgur.com/lcFfBW4.jpg',
    price: 860.00,
    artist: 'Leila Thomas',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 2,
    title: 'Black Canvas',
    image: 'https://i.imgur.com/oF15Dnx.png',
    price: 700.00,
    artist: 'Viggo',
    category: categories[1]._id,
    quantity: 5,
  },
  {
    id: 3,
    title: 'Soleil',
    image: 'https://i.imgur.com/MyjyauW.png',
    price: 360.00,
    artist: 'Gustav',
    category: categories[2]._id,
    quantity: 5,
  },
  {
    id: 4,
    title: 'Currents',
    image: 'https://i.imgur.com/jZBJeh1.jpg',
    price: 600.00,
    artist: 'Marion Flay',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 5,
    title: 'Dry Water',
    image: 'https://i.imgur.com/0EXMwAI.png',
    price: 400.00,
    artist: 'Maria Antoine',
    category: categories[1]._id,
    quantity: 5,
  },
  {
    id: 6,
    title: 'Composition',
    image: 'https://i.imgur.com/Hg0kwpi.png',
    price: 500.00,
    artist: 'Sandra Lief',
    category: categories[2]._id,
    quantity: 5,
  },
  {
    id: 7,
    title: 'Reflection',
    image: 'https://i.imgur.com/UE7Wyux.png',
    price: 200.00,
    artist: 'Alexander Lee',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 8,
    title: 'Scatter',
    image: 'https://i.imgur.com/1ZZy9ZG.jpg',
    price: 300.00,
    artist: 'Yula Mara',
    category: categories[0]._id,
    quantity: 7,
  },
  {
    id: 9,
    title: 'Particles',
    image: 'https://i.imgur.com/VtB3ADR.png',
    price: 300.00,
    artist: 'Yula Mara',
    category: categories[0]._id,
    quantity: 7,
  }
]);

console.log('products seeded');

process.exit()

});