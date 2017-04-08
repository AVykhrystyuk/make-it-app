'use strict';

import {
    AuthError
} from 'auth';

export class ExceptionHandlerService {
    static get __name__() {
        return 'exceptionHandlerService';
    }
    constructor($log, notificationService) {
        'ngInject';
        this.$log = $log;
        this.notificationService = notificationService;

        // TODO: root out all of these ignored exceptions
        this.ignorePatterns = [
            // For ui-router redirect while initializing - https://github.com/angular-ui/ui-router/issues/2977
            /^Possibly unhandled rejection: {"type":2,"message":"The transition has been superseded by a different transition"/,

            /*
                // For ui-grid /w angularjs 1.6 - https://github.com/angular-ui/ui-grid/issues/5890
                /^Possibly unhandled rejection: canceled$/,
                /^Possibly unhandled rejection: not-element$/,
            */
        ];
    }

    handle(exception, cause) {
        if (this.ignorePatterns.some(pattern => pattern.test(exception))) {
            return;
        }

        // if (exception instanceof AuthError) {
        //     return;
        // }

        this.notificationService.error(exception, "Error");
        this.$log.error(exception, ', cause:', cause);
    }
}