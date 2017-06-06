import { moduleFor, test } from 'ember-qunit';

moduleFor('route:sign-up', 'Unit | Route | sign up', {
  needs: ['service:create-user']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
