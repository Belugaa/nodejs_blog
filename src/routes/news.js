const express = require('express');
const router = express.Router();

const newsCotroller = require('../app/controllers/NewsController');

router.get('/chung', newsCotroller.chung);

router.get('/:slug', newsCotroller.show);

router.get('/', newsCotroller.index);

module.exports = router;
