'use strict';

const should = require('should');
const errorHandler = require('../index');

describe('lambda', function() {
    describe('handleError', function() {
        it('should normalise error with [500] label', function(done) {
            const cb = err => {
                if (err.message.indexOf('[500]') === 0) {
                    done();
                } else {
                    done('failed');
                }
            };

            const err = new Error('[500] some error');
            errorHandler(cb, err);
        });

        it('should normalise error without [500] label', function(done) {
            const cb = err => {
                if (err.message.indexOf('[500]') === 0) {
                    done();
                } else {
                    done('failed');
                }
            };

            const err = new Error('some error');
            errorHandler(cb, err);
        });

        it('should handle stale data dynamoDb exception', function(done) {
            const cb = err => {
                if (err.message.indexOf('[400] Stale data') === 0) {
                    done();
                } else {
                    done('failed');
                }
            };

            const err = new Error('some error');
            err.code = 'ConditionalCheckFailedException';
            errorHandler(cb, err);
        });
    });
});


