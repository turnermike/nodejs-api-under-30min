// app/routes/note_routes.js

const mongoose = require('mongoose');

const Notes = mongoose.model('notes');

module.exports = function(app, db) {

  // get all notes
  app.get('/notes', async (req, res) => {
    const allNotes = await Notes.find({});
    res.send(allNotes);
  });

  // create new note
  app.post('/notes', async (req, res) => {

    // get url parameters
    const note = {
      title: req.body.body,
      body: req.body.title,
      dateAdded: new Date()
    };
    console.log('note',   note);

    // const allNotes = await Notes.find({});

    // const updateResult = Notes.updateOne( note, (err, result) => {
    const updateResult = Notes.create( note, (err, result) => {

      if (err) console.log('Error: ', err);

      console.log('result', result);

    });

    res.send('hi');
    // res.send(allNotes);

  });


  app.get('/test', (req, res) => { res.send('hi'); });

};