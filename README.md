# Full-Stack JS Starter Template for Heroku

The monorepo contains:

- Express
- Create React App

## Development

**Server**

```sh
cd server
yarn dev
```

**Client**

```sh
cd client
yarn start
```

## Deploy to Heroku

### Create a Heroku App

```sh
heroku create
```

### Push to Heroku

```sh
git push heroku master
```

This triggers the build process. It may take a while depending on the size of your app.
The logs end with something like:

```
remote:    https://enigmatic-tundra-92868.herokuapp.com/ deployed to Heroku
remote:    Verifying deploy... done.
To https://git.heroku.com/enigmatic-tundra-92868.git
   512a511..34c4427  master -> master
```

The application's URL is in there.
