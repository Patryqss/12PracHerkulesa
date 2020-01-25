const helmet = require('helmet');
const home = require('./routes/home');
const comment = require('./routes/comments');
const express = require('express');
const path = require('path');
const db = require('./db');

const main = async () => {
  const app = express();

  // Database configuration
  const connection = await db.connect();
  const models = db.load(connection);

  // Database reset
  // if (process.env.TEST_ENV || process.env.NODE_ENV) {
  //   await connection.dropDatabase();
  // }

  db.register(app, connection, models);

  //Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(helmet());
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  //Routes
  app.use('/', home);
  app.use('/api/comments', comment);

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/build/index.html'));
  });

  //Listening
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

main();
