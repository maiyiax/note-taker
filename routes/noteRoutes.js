// Dependencies
const fs = require('fs');
const  path = require('path');
const router = require('express').Router();
const uniqid = require('uniqid');

// setup api route
router.get('/api/notes', function(req, res) {
    // GET /api/notes should read the db.json file 
    fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", (err, data) => {
        if(err) throw err;
        // and return all saved notes as JSON
        res.json(data)
    });
});

// POST /api/notes should receive a new note to save on the request body
router.post('/api/notes', (req, res) => {
    const newNote = req.body;

    // give each note a unique id when it's saved (look into npm packages that could do this for you)
    newNote.id = uniqid();

    // add it to the db.json file
    db.push(newNote);
    // then return the new note to the client
    
});

// Bonus: add DELETE route
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete
// In order to delete a note, you'll need to read all notes from the db.json file
// remove the note with the given id property
// and then rewrite the notes to the db.json file

module.exports = router;
    
