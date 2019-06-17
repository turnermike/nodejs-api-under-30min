// server.js

const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/db');

require('./app/models/notes');

const app = express();
const port = 8000;

// use body-parser to process the url parameters
app.use(bodyParser.urlencoded({ extended: true }));



// connect to MongoDB via mongoose
mongoose.Promise = global.Promise;
const test = mongoose.connect(
  db.url,
  { useNewUrlParser: true }
);

require('./app/routes')(app);

app.listen(port, () => {
  console.log('Express running on port ' + port);
});


// // initailize db connection
// MongoClient.connect('mongodb://noteable:kNsLHXXsX6gV3e20ajbwb@noteable-1s4py.mongodb.net/noteable-dev', (err, database) => {
//   if (err) return console.log(err);

//   // use routes
//   const db = database.db('noteable-dev');
//   require('./app/routes')(app, db);

//   app.listen(port, () => {
//     console.log('Express running on port ' + port);
//   });

// });




