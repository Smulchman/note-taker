// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the additional code they included but I have kept the file names. I am also using the solution as a resource, but I am trying to find a solution primarily by myself.

const router = require('express').Router();
const db = require ("../db/db.json");


router.get('/api/notes', (req, res) => {
  console.info("succesfully submitted get request to notes");
  res.json(db);
});

// not working. not sure why.
router.post('/api/notes'), (req, res) => {
  console.log("succesfully submitted post request to notes");
  res.json("notes post success!");
  // need to add the note in the request to the note db
  // need to parse through the note db, have it as an array, add our note to the array
  // then parse it back into json?
};

module.exports = router;
