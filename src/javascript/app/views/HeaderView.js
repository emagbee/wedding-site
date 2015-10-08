var BaseView = require('./BaseView');

module.exports = BaseView.extend({

    className: 'page page-index',

    template: false,

    el: 'header',

    ui: {
        hamburger: '.btn-hamburger',
        menu: '.menu',
        menuLinks: '.header-link'
    },

    events: {
        'click @ui.hamburger': 'onClickHamburger',
        'click @ui.menuLinks': 'onClickMenuLink'
    },

    initialize: function () {
        console.log(this.el)
        this.bindUIElements();
        this.delegateEvents();
    },

    onClickHamburger: function() {
        this.ui.hamburger.add(this.ui.menu).toggleClass('is-open');
    },

    onClickMenuLink: function(e) {
        var $target = $(e.currentTarget);
        this.ui.menuLinks.removeClass('active');
        $target.addClass('active');
        this.onClickHamburger();
    },

    onBeforeRender: function () {},

    onRender: function () {},

    onShow: function () {},

    onBeforeDestroy: function () {},

    onDestroy: function () {},

});