// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the additional code they included but I have kept the file names. I am also using the solution as a resource, but I am trying to find a solution primarily by myself.

const router = require('express').Router();

router.get('*', (req, res) => {
  console.log("succesfully submitted get request to the index");
  res.send("index get success!");
});

module.exports = router;