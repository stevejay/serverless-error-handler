'use strict';

const ERROR_CODE_REGEX = /^\[\d\d\d\]/;

module.exports = function(cb, err) {
    if (err.code === 'ConditionalCheckFailedException') {
        err.message = '[400] Stale data';
    } else if (!ERROR_CODE_REGEX.test(err.message)) {
        err.message = '[500] ' + err.message;
    }

    cb(err);
};
