const Cube = require('../models/Cube');
const mongoose = require('mongoose');

const createCube = async (entry) => {
    try {
        const newCube = new Cube({
            'name': entry.name,
            'description': entry.description,
            'imageUrl': entry.imageUrl,
            'difficultyLevel': entry.difficultyLevel,
        });
        
        const cube = await newCube.save();
        //when success it print.
        console.log(cube.toObject());

    } catch (err) {
        console.error();('err' + err);
    }

    // Create and save a Cube in local storage database.json 
    // const cube = Object.assign(new Cube(), entry);
    // cube.save();
};

module.exports = { createCube, };