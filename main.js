// var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
// var _ = require('underscore');
// Backbone.$ = $;

var MyView = Marionette.ItemView.extend({
  el: '#my-element',

  template: false,

  ui: {
    paragraph: 'p',
    button: '.my-button'
  },

  events: {
    'click @ui.button': 'clickedButton'
  },

  clickedButton: function() {
    console.log('I clicked the button!');
  }
});

var view = new MyView();
view.render();

view.ui.paragraph.text();        // returns 'Hello World'
view.ui.button.trigger('click'); // logs 'I clicked the button!'