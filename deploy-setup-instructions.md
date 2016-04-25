# Deploy setup instructions :dragon_face:

For deployments I decided to go for `ember-cli-deploy`. Using the [Lighting fast approach](https://www.youtube.com/watch?v=QZVYP3cPcWQ).

I've set up everything to go down smoothly. If you're curious about the details please visit the link provided above and explore the `config/deploy.js` file in this project,
you can deploy to the following 3 environments:

- `dev`
- `prod`

In order to get things going you need to set up the following env variables to ensure everything will run dandy:

| Variable                    | Description                                                    | Default value              |
|-----------------------------|----------------------------------------------------------------|----------------------------|
| `KEY_PREFIX`                | The prefix of the key redis will use to store a revision       | `ember-oauth-client:index` |
| `PREFIX`                    | The prefix used for AWS S3                                     | `ember-oauth-client`       |
| `DEV_REDIS_URL`             | The URL used for the redis connection in dev                   | `redis://0.0.0.0:6379/`    |
| `PROD_AWS_KEY`              | The key for your AWS account                                   | none                       |
| `PROD_AWS_SECRET`           | The secret for your AWS account                                | none                       |
| `PROD_AWS_S3_BUCKET_NAME`   | The name of the bucket you created in S3 for this              | none                       |
| `PROD_AWS_S3_BUCKET_REGION` | The name of the region where your bucket's located             | none                       |
| `PROD_REDIS_URL`            | The URL for the redis connection in the production environment | none                       |
|                             |                                                                |                            |
|                             |                                                                |                            |
