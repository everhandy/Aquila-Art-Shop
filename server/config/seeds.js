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
    title: 'Mona Lisa',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/131107152744-mona-lisa.jpg?q=w_2000,h_3000,x_0,y_0,c_fill',
    price: 860000000.00,
    artist: 'Leonardo Da Vinci',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 2,
    title: 'Starry Night',
    image: 'https://aadsh2is.cdn.imgeng.in/optimized/cache/data/product_images/VG485-1000x1000.jpg',
    price: 70000000.00,
    artist: 'Vincent Van Gogh',
    category: categories[1]._id,
    quantity: 5,
  },
  {
    id: 3,
    title: 'This Kiss',
    image: 'https://www.gustav-klimt.com/images/paintings/The-Kiss.jpg',
    price: 36000.00,
    artist: 'Gustav Klimt',
    category: categories[2]._id,
    quantity: 5,
  },
  {
    id: 4,
    title: 'The School of Athens',
    image: 'https://framemark.vam.ac.uk/collections/2006BE8817/full/735,/0/default.jpg',
    price: 6000.00,
    artist: 'Raphael',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 5,
    title: 'Las Meninas',
    image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437563116965/Las-Meninas--009.jpg?width=700&quality=85&auto=format&fit=max&s=b3316fd10dbef2b9646ee485afbc318a',
    price: 40000.00,
    artist: 'Diego Velázquez',
    category: categories[1]._id,
    quantity: 5,
  },
  {
    id: 6,
    title: 'The birth of Venus',
    image: 'https://i.imgur.com/6QA5acg.jpeg',
    price: 500000000.00,
    artist: 'Sandro Botticelli',
    category: categories[2]._id,
    quantity: 5,
  },
  {
    id: 7,
    title: 'Guernica',
    image: 'https://i.natgeofe.com/n/0adb5779-42cb-4a12-ab9c-fdb6498bee50/Main_Guernica_BAT-10313_16x9.jpg',
    price: 200000000.00,
    artist: 'Pablo Picasso',
    category: categories[0]._id,
    quantity: 5,
  },
  {
    id: 8,
    title: 'Girl with a Pearl Earring',
    image: 'https://cdn.britannica.com/33/194733-050-4CF75F31/Girl-with-a-Pearl-Earring-canvas-Johannes-1665.jpg',
    price: 20000.00,
    artist: 'Johannes Vermeer',
    category: categories[0]._id,
    quantity: 7,
  }
]);

console.log('products seeded');

process.exit()

});