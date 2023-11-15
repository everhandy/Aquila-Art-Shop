const db = require('./connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'users');

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
