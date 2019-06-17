// app/models/notes.js

const mongoose = require('mongoose');
const { Schema } = mongoose; // use mongo Schema object

const notesSchema = new Schema({
  test: String,
  title: String,
  body: String,
  dateAdded: Date
});

mongoose.model('notes', notesSchema);