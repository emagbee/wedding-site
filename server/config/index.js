var config = function() {

    var env = process.env.NODE_ENV || 'development';

    // if you have multiple envs, you can have a switch case here
    var config = {
        "sendgrid": {
            "user": "app33332395@heroku.com",
            "pass": "f3gqmcw84741"
        }
    };

    return config;
};

module.exports = config();