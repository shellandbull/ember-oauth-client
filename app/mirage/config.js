import Mirage from 'ember-cli-mirage';

var parseQueryString = function(qstr) {
  var query = {};
  var a = qstr.split('&');
  for (var i = 0; i < a.length; i++) {
      var b = a[i].split('=');
      query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
  }
  return query;
};

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
    };
  });

  this.post('/oauth/token', function(db, req) {
    const { username } = parseQueryString(req.requestBody);
    if (db.users.where({ email: username }).length) {
      return {
        access_token: '90c1e7ac7fe2acc8ba26dab87fe53f27d000f70951d6356e2bdcb49fbc22c3ec',
        token_type: 'bearer',
        expires_in: 7200,
        refresh_token: '0a1345868581f986a05d94c6d72bb9d3095d634cd229b5ba03eb518fff655f79',
        created_at: 'created_at'
      };
    } else {
      return new Mirage.Response(422, {}, {
        errors: {
          username: 'not found'
        },
      });
    }
  });
}
