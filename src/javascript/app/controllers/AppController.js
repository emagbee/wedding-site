var app = require('app/app');
var Backbone = require('backbone');
var channels = require('channels');

// Views
var GlobalView = require('views/GlobalView');
var BaseView = require('views/BaseView');
var IndexView = require('views/IndexView');
var VenueView = require('views/VenueView');
var HotelView = require('views/HotelView');
var PhotosView = require('views/PhotosView');
var RSVPView = require('views/RSVPView');
var RegistryView = require('views/RegistryView');
var HeaderView = require('views/HeaderView');

module.exports = Backbone.Marionette.Controller.extend({

    initialize: function () {

        // State checks
        app.onload = true;

        // Bootstrap it, gurrl
        this.bootstrap();

    },

    bootstrap: function () {
        this.globalView = new GlobalView();
        this.baseView = new BaseView();
        this.headerView = new HeaderView();

        channels.globalChannel.on('navigate', this.navigate, this);

    },

    navigate: function (options) {

        // If navigate() is being called...
        // we must be past our initial page load
        // so we'll set onload to 'false'
        app.onload = false;

        var url = options.url;
        var trigger = options.trigger ? options.trigger : false; 

        var pageClass = url.replace(/\//g, '');
        if (!pageClass) {
            pageClass = 'home';
        }

        $('.header-link').add('.btn-rsvp').removeClass('active');
        $('.' + pageClass).addClass('active');

        app.appRouter.navigate(url, {
            trigger: trigger
        });

    },

    /* View Routes
    =========================================== */

    index: function () {
        var indexView = new IndexView();
        app.regionMain.show(indexView);
    },

    venue: function () {
        var venueView = new VenueView();
        app.regionMain.show(venueView);
    },

    hotel: function () {
        var hotelView = new HotelView();
        app.regionMain.show(hotelView);
    },

    rsvp: function () {
        var rsvpView = new RSVPView();
        app.regionMain.show(rsvpView);
    },

    registry: function () {
        var registryView = new RegistryView();
        app.regionMain.show(registryView);
    },

    photos: function () {
        var photosView = new PhotosView();
        app.regionMain.show(photosView);
    },

    defaultHandler: function (route) {
        console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.25em', route);
    }

});
