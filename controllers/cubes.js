const fs = require('fs');
const path = require('path');
const database = path.join(__dirname, '../config/database.json');

const getCubes = () => {
    const cubes = fs.readFileSync(database);

    return JSON.parse(cubes);
};

module.exports = { getCubes, };