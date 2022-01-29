class createCotroller {
    // [GET] /create
    index(req, res) {
        res.render('create');
    }
}

module.exports = new createCotroller();
