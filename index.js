'use strict';

var Twit = require('twit');

var T = new Twit({
    'consumer_key': 'DJlkxjS6fB6D4LLHsUiN0Vpom',
    'consumer_secret': 'tcMs2JZlxxXcfg4XFO4uINTn4NKOeR4lxbLjXrDcjbgqSoUFqM',
    'access_token': '9987362-iHQbnJofPZX8ku8qSKpjpJzhileX6mxKabtpWJmfGy',
    'access_token_secret': '1bzfROMIbuIii6Duq1njaLajTwuJsR4rkVzl2PcFjZfJH'
});

exports.do = function(line, cb) {
    T.post('statuses/update', {
        status: line + ' - ' + Date.now()
    }, function(err) {
        if (err) {
            cb(err);
        } else {
            cb(err, {
                message: 'tweet successful',
                wait: false
            });
        }
    });
};

exports.do('hello world');