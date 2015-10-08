var Marionette = require('backbone.marionette');
var AppController = require('controllers/AppController.js');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'index',
        'venue(/)': 'venue',
        'hotel(/)': 'hotel',
        'registry(/)': 'registry',
        'rsvp(/)': 'rsvp',
        '*default': 'defaultHandler'
    },

    controller: new AppController()

});
