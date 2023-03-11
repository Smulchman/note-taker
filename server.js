// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the code they included but I have kept the file names. I am also working along side the solution while trying my best to only use the things that I understand.

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = 3001;

app.use(apiRoutes);
app.use(htmlRoutes);

// middleware included with express
// this middleware allows us to actually parse the JSON that we are sending and receiving
app.use(express.json());
// honestly, not sure what this two do but I am certain I've seen them before
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));