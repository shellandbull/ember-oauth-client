
// List all available deploy targets
var VALID_DEPLOY_TARGETS = [
  'dev',
  'prod'
];

var keyPrefix = process.env.KEY_PREFIX || 'ember-oauth-client:index';
var prefix    = process.env.PREFIX || 'ember-oauth-client';

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: keyPrefix
    },
    s3: {
      prefix: prefix
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'dev') {
    ENV.build.environment = 'development';
    ENV.s3.accessKeyId     = process.env.DEV_AWS_KEY;
    ENV.s3.secretAccessKey = process.env.DEV_AWS_SECRET;
    ENV.s3.bucket          = process.env.DEV_AWS_S3_BUCKET_NAME;  /* YOUR S3 BUCKET NAME */;
    ENV.s3.region          = process.env.DEV_AWS_S3_BUCKET_REGION; /* YOUR S3 REGION */;
    ENV.redis.url          = process.env.DEV_REDIS_URL || 'redis://0.0.0.0:6379/';
  }

  if (deployTarget === 'prod') {
    ENV.build.environment  = 'production';
    ENV.s3.accessKeyId     = process.env.PROD_AWS_KEY;
    ENV.s3.secretAccessKey = process.env.PROD_AWS_SECRET;
    ENV.s3.bucket          = process.env.PROD_AWS_S3_BUCKET_NAME;  /* YOUR S3 BUCKET NAME */;
    ENV.s3.region          = process.env.PROD_AWS_S3_BUCKET_REGION; /* YOUR S3 REGION */;
    ENV.redis.url          = process.env.PROD_REDIS_URL || 'redis://0.0.0.0:6379/';
  }

  return ENV;

  /* Note: a synchronous return is shown above, but ember-cli-deploy
   * does support returning a promise, in case you need to get any of
   * your configuration asynchronously. e.g.
   *
   *    var Promise = require('ember-cli/lib/ext/promise');
   *    return new Promise(function(resolve, reject){
   *      var exec = require('child_process').exec;
   *      var command = 'heroku config:get REDISTOGO_URL --app my-app-' + deployTarget;
   *      exec(command, function (error, stdout, stderr) {
   *        ENV.redis.url = stdout.replace(/\n/, '').replace(/\/\/redistogo:/, '//:');
   *        if (error) {
   *          reject(error);
   *        } else {
   *          resolve(ENV);
   *        }
   *      });
   *    });
   *
   */
}
