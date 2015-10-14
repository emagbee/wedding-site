var express = require('express');
var router = express.Router(),
    path = require('path'),
    email = require('../controller/email');

router.post('/form', email.send);

router.get('*', function(req, res) {
    res.sendFile(path.resolve('.') + '/build/index.html');
});

module.exports = router;