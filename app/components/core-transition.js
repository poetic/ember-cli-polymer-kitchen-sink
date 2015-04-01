import Ember from 'ember';

export default Ember.Component.extend({
  meta: null,
  transition: null,
  currentState: null,

  init: function() {
    this._super();
    this.currentState = { opened: false };
  },

  didInsertElement: function() {
    var component = this;

    document.addEventListener('polymer-ready', function() {
      // initial setup
      component.setup();
      document.getElementById('animate-me').removeAttribute('hidden');
    });
  },

  setup: function() {
    var target = document.getElementById('animate-me');

    if (this.transition) {
      this.transition.teardown(target);
    }

    var value = document.getElementById('sel').selectedOptions[0].value;
    this.transition = this.getMeta().byId(value);
    this.transition.setup(target);
  },

  getMeta: function() {
    if (!this.meta) {
      this.meta = document.createElement('core-meta');
      this.meta.type = 'transition';
    }
    return this.meta;
  },

  actions: {
    stuff: function() {
      var target = document.getElementById('animate-me');
      this.currentState.opened = !this.currentState.opened;
      this.transition.go(target, this.currentState);
    },
    changeAnimation: function() {
      this.setup();
    },
  }
});
