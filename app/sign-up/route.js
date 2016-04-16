import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({

  // Attributes
  createUserService: inject.service('create-user'),

  // Actions
  actions: {
    createRegistration(email, password, passwordConfirmation) {
      this.get('createUserService')
          .createUser({ email, password,passwordConfirmation })
          .then(() => this.transitionTo('authenticated'))
          .catch((e) => console.error('creating a user failed with ' + e));
    }
  }
});
