// please note: the solution to the challenge was put onto our repo early and I started this repository by copying that code. I removed all the additional code they included but I have kept the file names. I am also using the solution as a resource, but I am trying to find a solution primarily by myself.

// allows us to read and write our files
// fs
const fs = require('fs');
// Allows us to generate a random id for each note.
const uuidv1 = require('uuid/v1');


// NEED to look through the index to better understand how the fetch requests are parsing the data they receive. Need to know what they're expecting so I can structure the data returned accordingly. 


// I have adopted the class object structure used in the repository because it seems like it makes importing the helper functions much easier. I am not going to use it to implement async functions.
class Store {
    read() {
        // read the notes file return the value of that file.
        // needs to take JSON and parse that data into js
    }
    write(note) {
        // provide all the data for a chosen note
        // I need to have an id for the note and then on retrieval, return the information for that note so that it can be written into the front end.
    }
    retrieve() {
        // get all of the notes, needs to populate the left side and include an attribute or data- for the note's id
    }
    addNote(note) {
        // add whatever content the user has added as a note.
    }
};

// I didn't know we could export the class as a created object, very useful for having objects as method machines. Learned this from the solution.
module.exports = new Store();