const express = require('express');
const SiteCotroller = require('../app/controllers/SiteCotroller');
const router = express.Router();

const stiehCotroller = require('../app/controllers/SiteCotroller');

router.post('/store', SiteCotroller.store);

router.get('/:slug', stiehCotroller.show);

router.get('/', stiehCotroller.index);

module.exports = router;
