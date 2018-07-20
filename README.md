# inprogress

## deploy

#### required environment variables
- MONGODB_URI
- JWT_SECRET

### heroku

```bash
# login with your heroku account
heroku login

# create heroku app (inside the repo folder)
heroku create <APP_NAME> --buildpack https://github.com/mars/create-react-app-buildpack.git

# add mongolab addons for mongodb support
heroku addons:create mongolab

# check heroku environment variable (MONGODB_URI is automaticly set by the mongolab addon)
heroku config

# add a secret for JWT encoding
heroku config:set JWT_SECRET=<SECRET_MESSAGE>

# deploy
git push heroku master (or npm run deploy)

# watch logs
heroku logs --tail
```

### database

```bash
# initialize db with an empty project & 1 admin account ('mika@gmail.com':test)
node src/db/init-db-empty.js (ou npm run db:init)

# prepend the MONGODB_URI environement variable to init the remote db
MONGODB_URI=<REMOTE_MONGODB_URI> node src/db/init-db-empty.js
```
