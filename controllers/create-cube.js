const Cube = require('../models/cube');

const cube = new Cube('Default', 'Description', 'http://www.google.com', 1);

console.log(cube);

cube.save();