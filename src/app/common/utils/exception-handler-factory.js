'use strict';

import {
    AuthError
} from 'auth';

export function $exceptionHandlerFactory($log /*,errorHandler*/ ) {
    'ngInject'
    // TODO: root out all of these ignored exceptions
    const ignorePatterns = [
        // For ui-router redirect while initializing - https://github.com/angular-ui/ui-router/issues/2977
        /^Possibly unhandled rejection: {"type":2,"message":"The transition has been superseded by a different transition"/,

        /*
            // For ui-grid /w angularjs 1.6 - https://github.com/angular-ui/ui-grid/issues/5890
            /^Possibly unhandled rejection: canceled$/,
            /^Possibly unhandled rejection: not-element$/,
        */
    ];

    return function exceptionHandler(exception, cause) {
        if (ignorePatterns.some(pattern => pattern.test(exception))) {
            return;
        }

        // if (exception instanceof AuthError) {
        //     return;
        // }

        //errorHandler.reportError(exception);
        $log.error(exception, ', cause:', cause);
    }
}

$exceptionHandlerFactory.__name__ = '$exceptionHandler';