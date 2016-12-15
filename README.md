# serverless-error-handler

Error handler for errors thrown within AWS Lambda functions.
The message of the error gets formatted to conform to the error
message format of the serverless framework, then it is returned
as the error result for the lambda.

[![npm version](https://badge.fury.io/js/serverless-error-handler.svg)](https://badge.fury.io/js/serverless-error-handler)
[ ![Codeship Status for stevejay/serverless-error-handler](https://app.codeship.com/projects/99075000-a54f-0134-9382-0675723f157f/status?branch=master)](https://app.codeship.com/projects/190837)
[![Coverage Status](https://coveralls.io/repos/github/stevejay/serverless-error-handler/badge.svg?branch=master)](https://coveralls.io/github/stevejay/serverless-error-handler?branch=master)
[![dependency status](https://david-dm.org/stevejay/serverless-error-handler.svg)](https://david-dm.org/stevejay/serverless-error-handler)

## Install

```
$ npm install --save serverless-error-handler
```

## Usage

```js
const errorHandler = require('serverless-error-handler');

function handler(event, context, cb) {
    co(function*() {
        ...
        cb(null, { result: 'okay' });
    }).catch(err => errorHandler(cb, err));
}
```

## API

### errorHandler(cb, err)

Alters the message of `err` to conform to the error message format
of the serverless framework, and then passes it as the error to
the AWS Lambda `cb` callback.

#### object

Type: `Function`

The AWS Lambda callback function.

#### err

Type: `Error`

The thrown error object.

## License

MIT
