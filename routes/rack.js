var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

request = request.defaults({jar: false});

router.get('/', function(req, res) {
    request('https://www.nordstromrack.com/api/nrhl/catalog/search?query=', function(err, response, body){
        res.json({});

    });
});

router.get('/:term', function(req, res) {
    var term = req.params.term;
    request('https://www.nordstromrack.com/api/nrhl/catalog/search?query=' + term, function(err, response, body){
        res.jsonp(JSON.parse(body));
    });
});

module.exports = router;
