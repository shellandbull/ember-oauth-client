import { test } from 'qunit';
import moduleForAcceptance from 'ember-training/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign up');

test('visiting /sign-up', function(assert) {
  visit('/sign-up');

  andThen(() => {
    assert.equal(currentURL(), '/sign-up');
  });
});

test('Creating a new user, with valid parameters', function(assert) {
  assert.expect(5);

  visit('/sign-up');
  const email    = 'mariojgintili@gmail.com';
  const password = 'yolo123456';
  let user;

  andThen(() => {
    fillIn('.sign-up__form__email', email);
    fillIn('.sign-up__form__password', password);
    fillIn('.sign-up__form__password-confirmation', password);
    click('.sign-up__form__submit');
  });

  server.post('/users', function(db, req) {
    const { data } = JSON.parse(req.requestBody);
    assert.ok(true, 'sends a POST to /api/users with valid JSON');
    assert.equal(data.attributes.email, email, 'sends email in the payload');
    assert.equal(data.attributes.password, password, 'sends password in the payload');
    assert.equal(data.attributes['password-confirmation'], password, 'sends password-confirmation in the payload');

    user = db.users.insert({ email: data.attributes.email });

    return {
      data: {
        type: 'users',
        id: user.id,
        attributes: {
          email: user.email
        }
      }
    }
  });

  server.post('/oauth-applications', function(db, req) {
    const { data } = JSON.parse(req.requestBody);
    assert.ok(true, 'sends a POST to /api/oauth-applications with valid JSON');
    debugger;
  });
});
