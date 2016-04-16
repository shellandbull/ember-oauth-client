var parseQueryString = function(qstr) {
  var query = {};
  var a = qstr.split('&');
  for (var i = 0; i < a.length; i++) {
      var b = a[i].split('=');
      query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
  }
  return query;
}

export default function() {
  this.namespace = 'api';

  this.post('/users', function(db ,req) {
    const payload = JSON.parse(req.requestBody).data.attributes;
    const user    = db['users'].insert({ email: payload.email });
    return {
      data: {
        type: "users",
        id: user.id,
        attributes: {
          email: user.email
        }
      }
    };
  });

  this.post('/oauth-applications', function(db, req) {
    const payload           = JSON.parse(req.requestBody);
    const attributes        = payload.data.attributes;
    attributes.name         = 'chrome-browser-client';
    attributes.redirect_uri = 'http://localhost:4200/';
    attributes.owner_id     = payload.data.relationships.owner.data.id;
    const oauthApp          = db['oauth-applications'].insert(attributes);

    return {
      data: {
        type: 'oauth-applications',
        id: oauthApp.id,
        attributes: {
          name: oauthApp.name,
          'redirect-uri': oauthApp.redirect_uri,
        },
        relationships: {
          owner: {
            data: {
              type: 'users',
              id: oauthApp.owner_id
            }
          }
        }
      }
    }
  });

  this.post('/oauth/token', function(db, req) {
    const { grant_type, username, password } = parseQueryString(req.requestBody);
    if (db.users.where({ email: username }).length) {
      throw new Error('TODO IMPLEMENT');
      return {

      }
    } else {
      return new Mirage.Response(422, {}, {
        errors: {
          username: 'not found'
        },
      });
    }
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
