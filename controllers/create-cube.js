const Cube = require('../models/Cube');
const mongoose = require('mongoose');

const createCube = (entry) => {
    const cube = new Cube({ name: entry.name, description: entry.description, imageUrl: entry.imageUrl, difficultyLevel: entry.difficultyLevel, });
    
    cube.save((err, cube) => {
        if (err) return console.error(err);
        console.log(JSON.stringify(cube))
    });

    // Create and save a Cube in local storage database.json 
    // const cube = Object.assign(new Cube(), entry);
    // cube.save();
};

module.exports = { createCube, };