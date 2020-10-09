const Cube = require('../models/cube');
const createCube = (entry) => {

    const cube = Object.assign(new Cube(), entry);

    cube.save();
};

module.exports = { createCube, };