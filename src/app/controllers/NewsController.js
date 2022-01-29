class NewCotroller {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('News detail');
    }

    chung(req, res) {
        res.send('chung pro vip');
    }
}

module.exports = new NewCotroller();
