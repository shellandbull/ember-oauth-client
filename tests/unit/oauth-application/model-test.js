import { moduleForModel, test } from 'ember-qunit';

moduleForModel('oauth-application', 'Unit | Model | oauth application', {
  needs: ['model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
