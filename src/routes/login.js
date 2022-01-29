const express = require('express');
const router = express.Router();

const loginCotroller = require('../app/controllers/LoginController');

router.get('/', loginCotroller.index);
router.post('/', loginCotroller.dangnhap);

module.exports = router;
