var config = function() {

    var env = process.env.NODE_ENV || 'development';

    // if you have multiple envs, you can have a switch case here
    var config = {
        "sendgrid": {
            "user": "app42517117@heroku.com",
            "pass": "7cxgaoqd1042"
        }
    };

    return config;
};

module.exports = config();