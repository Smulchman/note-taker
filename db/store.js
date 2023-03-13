// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the additional code they included but I have kept the file names. I am also using the solution as a resource, but I am trying to find a solution primarily by myself.

// allows us to read and write our files
// fs
const fs = require('fs');
// Allows us to generate a random id for each note.
const uuidv1 = require('uuid/v1');

// I have adopted the class object structure used in the repository because it seems like it makes importing the helper functions much easier. I am not going to use it to implement async functions.
class Store {
};

// I didn't know we could export the class as a created object, very useful for having objects as method machines. Learned this from the solution.
module.exports = new Store();