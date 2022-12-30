const express = require('express');
const getTime = require('./../controllers/user');
const router = express.Router();

router.get('/', getTime);

module.exports = router;
