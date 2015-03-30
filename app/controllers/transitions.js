import Ember from 'ember';

export default Ember.Controller.extend({
  up: true,
  max: 4,
  actions: {
    changeAnimation() {
      var s = document.querySelector('select');
      document.querySelector('core-animated-pages').transitions = s.options[s.selectedIndex].value;
    },
    switchPanes(){
      var animatedPages = document.querySelector('core-animated-pages');
      if (this.up && animatedPages.selected === this.max || !this.up && animatedPages.selected === 0) {
        this.up = !this.up;
      }
      if (this.up) {
        animatedPages.selected += 1;
      } else {
        animatedPages.selected -= 1;
      }
    }
  }
});
