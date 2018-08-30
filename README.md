# 🛠 InProgress

## Server App

![showing our app](https://i.imgur.com/B1zbJFs.png)

### A simple but effective project management interface.

Having managed several real-size projects with heavy digital consultant-client communication, education, and task-tracking projects, we realized that :

1. For clients, Trello is not very accessible, too flexible and hides to much data.
2. Google Docs does not have any good task-tracking ability and after 3 months working on something you'll have to scroll 11 pages
3. Slack and Slite are made for internal digital team communication, not client relationship.

So we decided to think about what would be our ideal project management design...

🎉 Here it is !

> "The young baby of Trello and Google Docs"

  🥞 Real actions are messy and need space. The stacked columns dashboard view will give you plenty.

  ✅ Resources, Tickets and tasks categories only. Focus on what's left.

  🌍 Keep track of complex projects with sub-categories.

  🗣 Discussion is the key. Comment thread are a core part of the interface.

  🚀 Asymmetric design. Perfect for project leaders dealing with non-digital native clients.

  👊 No login needed. Share a single link to your client and you're good to go.

  🍏 Simple. Edit Inplace and selected features. This needs to be usable by your grand mother.

- 

A Project by ⚡️Start the F Up ([www.startthefup.co](https://www.startthefup.co)), a commando innovation agency in Paris.


* **V0** built for STFU by Wild Code School. Thanks to them and more personally to [@lfoussat](https://github.com/lfoussat) [@Mchtira](https://github.com/Mchtira) [@Alex-bui](https://github.com/Alex-bui) [@capucinel](https://github.com/capucinel) [@PierreLGV](https://github.com/PierreLGV) [@Kiitaan](https://github.com/Kiitaan) et leur formateur Clément [@kigiri](https://github.com/kigiri) 🙌
* **V1** : needing better graphic design, image uploading, notifications, mobile view.



NO LICENSE DISCLAIMER

⚠️ Watch out, the code here is provided for viewing and educative purpose only. 

There is no open-source license attached to it, so it's still all rights reserved.


## Deploy

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
