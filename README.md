# betsol-ng-module

[![Bower version](https://badge.fury.io/bo/betsol-ng-module.svg)](http://badge.fury.io/bo/betsol-ng-module)
[![npm version](https://badge.fury.io/js/betsol-ng-module.svg)](http://badge.fury.io/js/betsol-ng-module)


A template project for Angular.js modules. Copy it and modify according to your needs!

If your are going to use it in a project, that is not related to BETSOL GROUP, please remove all references
to BETSOL and/or to Slava Fomin, thank you!

@todo:

- Replace "betsol-ng-module" and "betsol/ng-module" with the global name of the library
- Replace "betsol.module" with an actual name of the module


## Features

- Distribution files are built using Gulp pipeline
- Minified copy of distribution files are also generated
- Testing framework is provided by Karma, Mocha and Expect.js 


## Installation

### Install library with *npm*

`npm i --save betsol-ng-module`


### Install library with *Bower*

`bower install --save betsol-ng-module`


### Add library to your page

``` html
<script src="/node_modules/betsol-ng-module/dist/betsol-ng-module.js"></script>
```

You should use minified version (`betsol-ng-module.min.js`) in production.


### Add dependency in your application's module definition

``` javascript
var application = angular.module('application', [
  // ...
  'betsol.module'
]);
```


## Usage

@todo


## API

@todo


## Changelog

Please see the [changelog][changelog] for list of changes.


## Feedback

If you have found a bug or have another issue with the library —
please [create an issue][new-issue].

If you have a question regarding the library or it's integration with your project —
consider asking a question at [StackOverflow][so-ask] and sending me a
link via [E-Mail][email]. I will be glad to help.

Have any ideas or propositions? Feel free to contact me by [E-Mail][email].

Cheers!


## FAQ

@todo


## Developer guide

Fork, clone, create a feature branch, implement your feature, cover it with tests, commit, create a PR.

Run:

- `npm i` to initialize the project
- `gulp build` to re-build the dist files
- `gulp test` or `karma start` to test the code

Do not add dist files to the PR itself.
We will re-compile the module manually each time before releasing.


## Support

If you like this library consider to add star on [GitHub repository][repo-gh].

Thank you!


## License

The MIT License (MIT)

Copyright (c) 2016 Slava Fomin II, BETTER SOLUTIONS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

  [changelog]: changelog.md
  [so-ask]:    http://stackoverflow.com/questions/ask?tags=angularjs,javascript
  [email]:     mailto:s.fomin@betsol.ru
  [new-issue]: https://github.com/betsol/ng-module/issues/new
  [gulp]:      http://gulpjs.com/
  [repo-gh]:   https://github.com/betsol/ng-module
