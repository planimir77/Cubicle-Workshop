const fs = require('fs');
const path = require('path');
const database = path.join(__dirname, '../config/database.json');

const getCube = (id) => {
    const cubes = fs.readFileSync(database);
    const test = Array.from(JSON.parse(cubes));

    const cube = test.filter(function(cube){
        
        return cube.id == id;
    });

    return cube;
};

module.exports = { getCube }