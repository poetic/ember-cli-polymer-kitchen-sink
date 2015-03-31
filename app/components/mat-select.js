import Ember from 'ember';
var $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'select',
  didInsertElement(){
    $(document).ready(function(){
      $('select').material_select();
    });
  },
  change(){
    this.sendAction('changeAnimation');
  }
});
