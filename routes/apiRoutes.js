// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the additional code they included but I have kept the file names. I am also using the solution as a resource, but I am trying to find a solution primarily by myself.

const router = require('express').Router();

router.get('/api/notes', (req, res) => {
  console.log("succesfully submitted get request to notes");
  res.send("notes get success!");
});

// not working. not sure why.
router.post('/api/notes'), (req, res) => {
  console.log("succesfully submitted post request to notes");
  res.send("notes post success!");
};

module.exports = router;
