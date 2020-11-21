// Dependencies
const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const db = require('../db/db.json');

// enable debug messages
module.uniqid_debug = true;
const uniqid = require('uniqid');

// setup api route
router.get('/notes', (req, res) => {
    // GET /api/notes should read the db.json file and return all saved notes as JSON 
    fs.readFileSync(path.join(__dirname, "../db/db,json"));         
    res.json(db);
});


// POST /api/notes should receive a new note to save on the request body
router.post('/notes', (req, res) => {

    let newNote = req.body;
    fs.readFileSync(path.join(__dirname, "../db/db,json"));
    
    // give each note a unique id when it's saved (look into npm packages that could do this for you)
    newNote.id = uniqid();

    // add it to the db.json file
    db.push(newNote);

    // write data tp db.json file
    fs.writeFileSync(path.join(__dirname, "../db/db,json"), JSON.stringify({ db }, null, 2));

    // then return the new note to the client
    res.send(newNote);

});

// Bonus: add DELETE route
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete
router.delete('/notes/:id', (req, res) => {
    let id = req.params.id;

    // In order to delete a note, you'll need to read all notes from the db.json file
    fs.readFileSync(path.join(__dirname, "../db/db,json"));

    // remove the note with the given id property
    db.splice(id, 1);

    // and then rewrite the notes to the db.json file
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify({ db }, null, 2));

    res.send(req.body);
})

module.exports = router;

