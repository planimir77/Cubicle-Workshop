const { getCube, getCubes } = require('../controllers/cube-get');
const { createCube } = require('../controllers/create-cube');

module.exports = (app) => {
    app.get('/', function (req, res) {
        const query = req.query;
        const cubes = getCubes(query);
        res.render('index', { title: "Home page", cubes: cubes, });
    });

    app.get('/about', function (req, res) {
        res.render('about', { title: "About page", });
    });

    app.get('/details/:id', function (req, res) {
        const cube = getCube(req.params.id)[0];
        res.render('details', Object.assign({ title: "Cube details", }, cube));
    });

    app.get('/create', function (req, res) {
        res.render('create', { title: "Create page", });
    });

    app.post('/create', function (req, res) {
        const entry = req.body;
        createCube(entry);
        res.redirect('/');
    });

    app.get('*', function (req, res) {
        res.render('404', { title: "Not found", });
    });
};
