# isomorphic-mongo-objectid

[![Shippable branch](https://img.shields.io/shippable/5aab0aab1495e11600ca5c7b/master.svg)](https://app.shippable.com/projects/5aab0aab1495e11600ca5c7b)
[![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/MrJohnDoherty.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/MrJohnDoherty)

[twitter-image]:https://img.shields.io/twitter/follow/mrJohnDoherty.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/mrJohnDoherty

A 0.7 bytes pure JavaScript implementation of mongo **ObjectID** for the client _(browser)_ and server _(nodejs)_. A machine id is created for the client and persistent across a single domain using the browsers [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Installation

### Client-side

Copy [isomorphic-mongo-objectid.min.js](dist/isomorphic-mongo-objectid.min.js) into your page and add a script tag:

```html
<script src="js/isomorphic-mongo-objectid.min.js"></script>
```

### Server-side

```bash
npm install --save isomorphic-mongo-objectid
```

## Usage

```js

```

## Unit Tests

1. Checkout using `git clone https://github.com/john-doherty/isomorphic-mongo-objectid`
2. Navigate into project folder `cd isomorphic-mongo-objectid`
3. Install dependencies `npm install`
4. Run the tests `npm test`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes _(including tests)_: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Update Minified Version

You can generate a new _.min.js_ file by updating the version number in the [package.json](package.json) file and executing:

```bash
npm run build
```

## Star the repo

If you find this useful, star the repo, it's super motivating :)

## Bugs

[Open a ticket](https://github.com/john-doherty/isomorphic-mongo-objectid/issues)

## History

For change-log, check [releases](https://github.com/john-doherty/isomorphic-mongo-objectid/releases).

## License

Licensed under [MIT License](LICENSE) &copy; [John Doherty](http://www.johndoherty.info)