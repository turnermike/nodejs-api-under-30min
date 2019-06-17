// app/routes/note_routes.js

const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

const Notes = mongoose.model('notes');

module.exports = function(app, db) {

  // get all notes
  app.get('/notes', async (req, res) => {
    const allNotes = await Notes.find({});
    res.send(allNotes);
  });

  // get note by id
  app.post('/notes/:id', (req, res) => {

    const details = { '_id':  req.params.id };

    Notes.findOne(details, (err, item) => {
      if (err) {
        console.log('Error: ', err);
        res.send({ 'error': err });
      }else{
        console.log('item', item);
        res.send(item);
      }
    });

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

      if (err) res.send('Error: ', err);

      // console.log('result', result);
      res.send(result)

    });

  });

  // delete note by id
  app.delete('/notes/:id', (req, res) => {

    const details = { '_id': new ObjectID(req.params.id) };
    Notes.deleteOne(details, (err, items) => {

      if (err) res.send('Error: ', err);

      res.send('Note ' + req.params.id + ' deleted!');

    })
  });


  app.get('/test', (req, res) => { res.send('hi'); });

};