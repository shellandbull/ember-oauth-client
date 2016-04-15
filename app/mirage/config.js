export default function() {
  this.namespace = 'api';

  this.post('/users', function(db ,req) {
    const payload = JSON.parse(req.requestBody).data.attributes;
    const user    = db.users.insert({ email: payload.email });
    return {
      data: {
        type: "users",
        attributes: {
          id: user.id,
          email: user.email
        }
      }
    };
  });

  this.post('/oauth-applications', function(db, req) {

  });

  this.post('/oauth/token', function(db, req) {

  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
