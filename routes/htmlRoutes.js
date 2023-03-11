const path = require('path');
const router = require('express').Router();

router.get('*', (req, res) => {
  console.log("succesfully submitted get request to the index")
});


module.exports = router;
