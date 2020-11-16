// Dependencies
const fs = require('fs');
const  path = require('path');
const router = require('express').Router();

// setup api route
router.get('/api/notes', function(req, res) {
    // should read the db.json file 
    fs.readFile(path.join(__dirname, "../Develop/db/db.json"), "utf8", (err, data) => {
        if(err) throw err;
        // and return all saved notes as JSON
        res.json(data)
    });
});

module.exports = router;
    
