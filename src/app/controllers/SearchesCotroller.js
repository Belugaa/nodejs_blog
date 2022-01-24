class SearchController {

    index(req, res) {
        res.render('search');
    }

    show(req, res) {
        res.send('Search detail');
    }
    
}

module.exports = new SearchController;