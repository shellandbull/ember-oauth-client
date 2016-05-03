import Ember from 'ember';

export default Ember.Component.extend({

  // Hooks
  init() {
    this._super(...arguments);

    this.email                = null;
    this.password             = null;
    this.passwordConfirmation = null;
  },

  onFormSubmission() {
    throw new Error('onFormSubmission must be provided!');
  },
});
