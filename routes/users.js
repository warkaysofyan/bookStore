const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1> good Job </h1>');
});

module.exports = router;
