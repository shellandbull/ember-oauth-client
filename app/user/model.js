import DS from 'ember-data';

export default DS.Model.extend({

  // Attributes
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),

  // Relationships
  oauthApplications: DS.hasMany('oauth-application', { async: true })
});
