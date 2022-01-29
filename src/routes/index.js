const newsRouter = require('./news');
const siteRouter = require('./site');
const create = require('./create');
const logup = require('./logup');
const login = require('./login');

function route(app) {
    app.use('/create', create);

    app.use('/logup', logup);

    app.use('/login', login);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
