import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({
  store: inject.service(),

  createUser(userAttributes) {
    const store       = this.get('store');
    const user        = store.createRecord('user', userAttributes);
    const oauthApp    = store.createRecord('oauth-application', {});

    return user.save().then((createdUser) => {
      oauthApp.set('owner', user);
      oauthApp.save().then((createdApplication) => {

      });
    });
  },
});
