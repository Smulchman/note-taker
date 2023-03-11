const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
  console.log("succesfully submitted get request to notes")
});

router.post('/notes'), (req, res) => {
  console.log("succesfully submitted post request to notes")
}

module.exports = router;
