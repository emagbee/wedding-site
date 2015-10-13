var BaseView = require('./BaseView');
var template = require('templates/rsvp.hbs');

module.exports = BaseView.extend({

    className: 'page page-rsvp',

    template: template,

    ui: {
        form: 'form',
        email: '#email'
    },

    events: {
        'submit @ui.form': 'onFormSubmit'
    },

    initialize: function () {},

    onRender: function () {},

    onShow: function () {},

    onFormSubmit: function(e) {
        e.preventDefault();
        e.stopPropagation();

        console.log('form submit!!')

        this.resetErrors();

        if (this.validEmail(this.ui.email.val()) !== true) {
            console.log('ERROR');
            this.addError('Please enter a valid email address', this.ui.email);
        }

        if (this.errors.length === 0) {
            var self = this;

            $.ajax({
                url: window.location.origin + '/form',
                type: 'post',
                dataType: 'json',
                data: this.ui.form.serialize(),
                success: function(data) {
                    // self.onSuccess();
                }
            });

            this.onSuccess();

        } else {
            this.showErrors();
        }

    },

    resetErrors: function() {
        this.errors = [];
        this.$el.removeClass('errors-showing');
    },

    addError: function(msg, $input) {
        this.errors.push(msg);
        $input.addClass('error');
    },

    showErrors: function() {
        this.$el.addClass('errors-showing');
    },

    onSuccess: function() {
        this.$el.addClass('success-showing');
        this.resetForm();
    },

    resetForm: function() {
        this.ui.form[0].reset();
    },

    validEmail: function(email) {
        var atPos = email.indexOf('@');
        var dotPos = email.lastIndexOf('.');

        if (atPos< 1 || dotPos<atPos+2 || dotPos+2>=email.length) {
            return false;
        }

        return true;
    },

    onDestroy: function () {}

});
