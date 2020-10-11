const fs = require('fs');
const path = require('path');
const databaseJSON = path.join(__dirname, '../config/database.json');

const data = fs.readFileSync(databaseJSON);
const cubes = Array.from(JSON.parse(data));


const getCube = (id) => {
    const cube = cubes.filter(cube => cube.id == id);

    return cube;
};

const getCubes = (query) => {

    if (query.from && query.to) {
        const cubesFiltered = cubes.filter(cube =>
            cube.name.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()) &&
            Number(cube.difficultyLevel) >= Number(query.from) &&
            Number(cube.difficultyLevel) <= Number(query.to));

        return cubesFiltered;
    }

    return cubes;
};

module.exports = { getCube, getCubes, };
