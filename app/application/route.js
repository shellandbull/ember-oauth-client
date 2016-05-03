import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({

  // Attrs
  session: inject.service(),

  // Hooks
  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      this.transitionTo('authenticated');
    } else {
      this.transitionTo('sign-up');
    }
  }
});
