<h1 align="center">
  @weh/matter
</h1>

<p align="center">
  A front matter parsing plugin for the <a href="https://github.com/wehjs/weh">weh static site generator</a>
</p>

<p align="center">
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index"><img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square"
  alt="API stability"></a>
  <!-- code coverage -->
  <a href="https://codecov.io/gh/wehjs/matter"><img src="https://img.shields.io/codecov/c/github/wehjs/matter.svg?style=flat-square"
  alt="code coverage"></a>
  <!-- travis ci -->
  <a href="https://travis-ci.org/wehjs/matter"><img src="https://img.shields.io/travis/wehjs/matter.svg?style=flat-square"
  alt="test status"></a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>

## Features

- **Extract YAML metadata** _(Front Matter)_ from text files within the [weh](https://github.com/wehjs/weh) `files` object
- **Custom filter functions** to include or exclude files from transformation

## Installation

```sh
npm install --save @weh/matter
```

## Example

```js
const weh = require('@weh/weh')
const matter = require('@weh/matter')

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
weh(async site => {
  // we register our plugin...
  site.use(matter)
  // ...and initiate the build process
  return site
})
```

## How does it work?

`@weh/matter` extracts any Front Matter from the `contents` property of a `file` object and writes it to its `metadata` property.

Given the following text file:

```
---
title: Greeting
---
Hello World
```

The resulting weh `file` object would be:

```js
contents: 'Hello World',
metadata: {
  title: 'Greeting'
}
```
