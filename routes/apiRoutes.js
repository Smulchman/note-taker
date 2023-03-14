// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the additional code they included but I have kept the file names. I am also using the solution as a resource, but I am trying to find a solution primarily by myself.

const router = require('express').Router();
const db = require ("../db/db.json");

// very simple, read the db.json file, parse it, return it.
router.get('/api/notes', (req, res) => {
  console.info("succesfully submitted get request to db");
  res.json(db);
});


router.post(('/api/notes'), (req, res) => {
  console.info("succesfully submitted post request to db");
  console.log(req.body);
  // parse through db.json
  // make it an array
  // push req.body onto array
  // rewrite the file as a body
});

module.exports = router;
