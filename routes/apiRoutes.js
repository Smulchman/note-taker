const router = require('express').Router();

router.get('/api/notes', (req, res) => {
  console.log("succesfully submitted get request to notes");
});

router.post('/api/notes'), (req, res) => {
  console.log("succesfully submitted post request to notes");
};

module.exports = router;
