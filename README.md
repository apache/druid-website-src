Druid Project Website
=====================

https://druid.apache.org/

## Building

The site requires [Node](https://nodejs.org/en/) 10.24.1 - ensure that you use this version of node. For example, using, if you're using [nvm](https://github.com/nvm-sh/nvm):

```
nvm install 10
nvm use 10
```

Setup (you only need to do this once):

```
npm install
bundle install
```

Every time you want to run the site:

```
gulp
npm start
```

## Notes

Ideally we would not be checking in the `css` directory and just build it as part of the deploy process.

## Contributing

See [CONTRIBUTING.md](https://github.com/apache/druid-website-src/blob/master/CONTRIBUTING.md).

