import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({

  // Attributes
  store: inject.service(),
  session: inject.service(),
  currentUser: inject.service(),

  // Methods
  createUser({ email, password, passwordConfirmation }) {
    const {
            store,
            session,
            currentUser
          } = this.getProperties('store', 'session', 'currentUser');


    const user     = store.createRecord('user', { email, password, passwordConfirmation });
    const oauthApp = store.createRecord('oauth-application', {});

    return user.save().then((createdUser) => {
      oauthApp.set('owner', user);
      oauthApp.save().then(() => {
        session.authenticate('authenticator:oauth2', email, password).then(() => {
          currentUser.set('content', createdUser);
        });
      });
    });
  },
});
