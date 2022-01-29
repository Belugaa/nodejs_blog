const express = require('express');
const router = express.Router();

const logupCotroller = require('../app/controllers/LogupController');

router.get('/', logupCotroller.index);

router.post('/', logupCotroller.acconut);

module.exports = router;
