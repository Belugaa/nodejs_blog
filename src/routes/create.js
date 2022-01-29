const express = require('express');
const router = express.Router();

const createController = require('../app/controllers/CreateProduct');

router.get('/', createController.index);

module.exports = router;
