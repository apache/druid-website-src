Druid Project Website
=====================

https://druid.apache.org/

## Building

Setup (you only need to do this once):

```
npm install
bundle install
```

If you receive the error `error: no template named 'remove_cv_t' in namespace 'std'; did you mean 'remove_cv'? · Issue #38367 · nodejs/node · GitHub)` use [the following](https://github.com/nodejs/node/issues/38367) CXX flags with `npm install`:

```
CXXFLAGS="--std=c++14" npm install *
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

