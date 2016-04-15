import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model() {
    return this.store.createRecord('user');
  },

  actions: {
    createRegistration(model, email, password, passwordConfirmation) {
      const session = this.get('session');
      model.setProperties({ email, password, passwordConfirmation });

      return model.save().then(() => {
        return session.authenticate('authenticator:oauth2', email, password).then(() => {
          console.log('authentication finished!');
        });
      });
    }
  }
});
