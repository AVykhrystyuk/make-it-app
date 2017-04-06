'use strict';

import {
    inherits
} from 'utils';

function CustomError(message, name) {
    Error.call(this, message);

    this.message = message || 'Default Message';
    this.name = name || 'CustomError';
    if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(this, this.constructor);
    } else {
        var error = new Error(this.message);
        error.name = this.name;
        this.stack = error.stack;
    }
}

inherits(CustomError, Error);

export function AuthError(message) {
    CustomError.call(this, message || 'Authentication error', 'AuthError');
}

inherits(AuthError, CustomError);