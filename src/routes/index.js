const newsRouter = require('./news');
const searchRouter = require('./search');

function route(app) {
    app.get('/news', newsRouter);

    app.get('/search', searchRouter);
     
    app.get('/', (req, res) => {
        res.render('home');
    });
}

module.exports = route;