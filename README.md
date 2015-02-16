# karma-phantomjs-launcher-path

> Launcher for [PhantomJS] - without dependency on [phantomjs npm package] and using phantomjs found in PATH.

The original [karma-phantomjs-launcher] depends on the `phantomjs` package. This can be sometimes problematic as the `phantomjs` package downloads [PhantomJS] from a third-party website using the version set in the npm package and has apparent issues finding existing installs in PATH.

This package removes `phantomjs` from dependencies and looks in PATH using whereis during install.

## Installation

The easiest way is to keep `karma-phantomjs-launcher-path` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-phantomjs-launcher-path": "~0.1"
  }
}
```

You can simply do it by:
```bash
npm install karma-phantomjs-launcher-path --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS']
    plugins: [
      "karma-phantomjs-launcher-path"
    ]
  });
};
```
----

For more information on Karma see the original [karma-phantomjs-launcher] package or [Karma homepage].


[Karma homepage]: http://karma-runner.github.com
[PhantomJS]: http://phantomjs.org/
[phantomjs npm package]: https://www.npmjs.org/package/phantomjs
[karma-phantomjs-launcher]: https://github.com/karma-runner/karma-phantomjs-launcher