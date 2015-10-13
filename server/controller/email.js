var config = require('../config'),
    sendgrid  = require('sendgrid')(config.sendgrid.user,config.sendgrid.pass);

exports.send = function (req, res) {
    console.log('SEEEEEEEEEND');
    console.log(req.body.email)
    console.log(req.body.first_name)
    console.log(req.body.last_name)
    console.log(req.body.attending)
    console.log(req.body.plus_one)
    var emailID = Math.floor(Math.random() * 1000) + 1;
	sendgrid.send({
        to: 'calebjeffrey.dev@gmail.com',
        from: req.body.email,
        subject: 'Wedding RSVP #' + emailID,
        text: 'firstname: ' + req.body.first_name + ' lastname: ' + req.body.last_name + ' email: ' + req.body.email + ' attending: ' + req.body.attending + ' plusone: ' + req.body.plus_one
    }, function(err, json) {
        if (err) return res.send("{success:false}");
        // sendgrid.send({
        //     to: req.body.email,
        //     from: 'QandA@ESKluft.com',
        //     subject: 'Re: your Kluft request',
        //     text: 'Hello,\nThank you for reaching out to E.S. Kluft & Company. Your query is important to us.\nWe typically answer emails within 2 business days of receiving them. Our business hours are Monday through Friday 10AM – 6PM PST.\n\nSincerely,\nThe E.S. Kluft & Company team'
        // });

        return res.send("{success:true}");
    });
}