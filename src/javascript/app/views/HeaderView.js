var BaseView = require('./BaseView');

module.exports = BaseView.extend({

    template: false,

    el: 'header',

    ui: {
        hamburger: '.btn-hamburger',
        menu: '.menu',
        menuLinks: '.header-link',
        rsvp: '.btn-rsvp'
    },

    events: {
        'click @ui.hamburger': 'onClickHamburger',
        'click @ui.menuLinks': 'onClickMenuLink',
        'click @ui.rsvp': 'onClickMenuLink'
    },

    initialize: function () {
        this.bindUIElements();
        this.delegateEvents();
        var pageClass = window.location.pathname.replace(/\//g, '');
        if (!pageClass) {
            pageClass = 'home';
        }

        $('.header-link').add('.btn-rsvp').removeClass('active');
        $('.' + pageClass).addClass('active');
    },

    onClickHamburger: function() {
        this.ui.hamburger.add(this.ui.menu).toggleClass('is-open');
    },

    onClickMenuLink: function(e) {
        var $target = $(e.currentTarget);
        this.ui.menuLinks.removeClass('active');
        this.ui.rsvp.removeClass('active');
        $target.addClass('active');
        this.onClickHamburger();
    },

    onBeforeRender: function () {},

    onRender: function () {},

    onShow: function () {},

    onBeforeDestroy: function () {},

    onDestroy: function () {},

});
