import DS from 'ember-data';

export default DS.Model.extend({

  // Attrs
  name: DS.attr('string'),
  uid: DS.attr('string'),
  redirectUri: DS.attr('string'),

  // Relationships
  owner: DS.belongsTo('user', { async: true }),
});
