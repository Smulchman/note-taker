// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the additional code they included but I have kept the file names. I am also using the solution as a resource, but I am trying to find a solution primarily by myself.

const router = require('express').Router();
// path is used in activity 21 and, while I do not understand exactly what it is or how it works, it is the only way I know to link our html files.
const path = require('path');

// this links to our index.html page as the homepage
router.get('/', (req, res) => {
  console.info("succesfully submitted get request to the index");
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// this links to our notes.html page as the note page.
router.get('/notes', (req, res) => {
  console.info("succesfully submitted get request to the notes page");
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;