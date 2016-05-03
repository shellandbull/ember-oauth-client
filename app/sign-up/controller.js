import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  // Attributes
  createUserService: inject.service('create-user'),

  // Actions
  actions: {
    createRegistration(email, password, passwordConfirmation) {
      return this.get('createUserService')
              .createUser({ email, password,passwordConfirmation })
              .then(() => this.transitionToRoute('authenticated'))
              .catch((e) => console.error('creating a user failed with ' + e));
    }
  }
});
