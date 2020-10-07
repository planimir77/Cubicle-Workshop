// TODO: Require Controllers...

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.render('index', { title: "Home page" });
    });

    app.get('/about', function (req, res) {
        res.render('about', { title: "About page" });
    });

    app.get('/create', function (req, res) {
        res.render('create', { title: "Create page" });
    });

    app.post('/create', function (req, res) {

        res.render('create');
    });

    app.get('*', function (req, res) {
        res.render('404', { title: "Not found" });
    });
};
