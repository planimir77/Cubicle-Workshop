const { getCubes } = require('../controllers/cubes');
const { getCube } = require('../controllers/cube');
const { createCube } = require('../controllers/create-cube')

module.exports = (app) => {
    app.get('/', function (req, res) {
        const cubes = getCubes();
        res.render('index', { title: "Home page", cubes: cubes });
    });

    app.get('/about', function (req, res) {
        res.render('about', { title: "About page" });
    });

    app.get('/details/:id', function (req, res) {
        const cube = getCube(req.params.id)[0];
        res.render('details', { title: "Cube details", id: cube.id, name: cube.name, description: cube.description, imageUrl: cube.imageUrl, difficulty: cube.difficulty });
    });

    app.get('/create', function (req, res) {
        res.render('create', { title: "Create page" });
    });

    app.post('/create', function (req, res) {
        const entry = req.body;
        createCube(entry);
        res.redirect('/');
    });

    app.get('*', function (req, res) {
        res.render('404', { title: "Not found" });
    });
};
