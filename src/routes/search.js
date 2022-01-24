const express = require('express');
const router = express.Router();

const searchCotroller = require('../app/controllers/SearchesCotroller');

router.use('/', searchCotroller.index);

module.exports = router;