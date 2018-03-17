# isomorphic-mongo-objectid

[![Shippable branch](https://img.shields.io/shippable/5aab0aab1495e11600ca5c7b/master.svg)](https://app.shippable.com/projects/5aab0aab1495e11600ca5c7b)
[![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/MrJohnDoherty.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/MrJohnDoherty)

[twitter-image]:https://img.shields.io/twitter/follow/mrJohnDoherty.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/mrJohnDoherty

A 0.7k pure JavaScript implementation of mongo **ObjectID** for the client _(browser)_ and server _(nodejs)_. A machine id is created for each client and persistent across a single domain using the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Installation

### Client-side

Copy [isomorphic-mongo-objectid.min.js](dist/isomorphic-mongo-objectid.min.js) into your page and add a script tag:

```html
<script src="isomorphic-mongo-objectid.min.js"></script>
```

### Server-side

Install via npm:

```bash
npm install --save isomorphic-mongo-objectid
```

Require in your module:

```js
var ObjectID = require('isomorphic-mongo-objectid');
```

## Usage

```js
ObjectID(); // returns 5aab1a1a5e756f5b6d000001
ObjectID('5aab1a1a5e756f5b6d000001').getDate(); // returns Fri Mar 16 2018 01:12:58 GMT+0000 (GMT)
ObjectID('5aab1a1a5e756f5b6d000001').toArray(); // returns [90, 171, 26, 26, 94, 117, 111, 91, 109, 0, 0, 1]
ObjectID(0, 0, 0, 0x00ffffff); // returns 000000000000000000ffffff
```

## Contributing

### Checkout the project

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes _(including tests)_: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

### Run unit tests

1. Checkout using `git clone https://github.com/john-doherty/isomorphic-mongo-objectid`
2. Navigate into project folder `cd isomorphic-mongo-objectid`
3. Install dependencies `npm install`
4. Run the tests `npm test`

### Update .min version

1. Checkout using `git clone https://github.com/john-doherty/isomorphic-mongo-objectid`
2. Navigate into project folder `cd isomorphic-mongo-objectid`
3. Install dependencies `npm install`
4. Make the relevant changes
5. Updated `version` number in `package.json`
6. Run `npm run build` to generate a new [isomorphic-mongo-objectid.min.js](dist/isomorphic-mongo-objectid.min.js) file

## Bugs

[Open a ticket](https://github.com/john-doherty/isomorphic-mongo-objectid/issues)

## History

For change-log, check [releases](https://github.com/john-doherty/isomorphic-mongo-objectid/releases).

## License

Licensed under [MIT License](LICENSE) &copy; [John Doherty](http://www.johndoherty.info)