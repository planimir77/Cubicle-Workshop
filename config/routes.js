// TODO: Require Controllers...

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/about', function (req, res) {
        res.render('about');
    });

    app.get('/create', function (req, res) {
        res.render('create');
    });

    app.post('/create', function (req, res) {

        res.render('create');
    });

    app.get('*', function (req, res) {
        res.render('404');
    });
};
