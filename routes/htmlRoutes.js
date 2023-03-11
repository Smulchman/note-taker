// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the code they included but I have kept the file names. I am also working along side the solution while trying my best to only use the things that I understand.

const router = require('express').Router();

router.get('*', (req, res) => {
  console.log("succesfully submitted get request to the index");
});

module.exports = router;