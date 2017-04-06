'use strict';

import {
    AuthError
} from 'auth';

export class ExceptionHandlerService {
    static get __name__() {
        return 'exceptionHandlerService';
    }
    constructor(notificationService) {
        'ngInject';
        this.notificationService = notificationService;
    }

    handle(exception) {

        // if (exception instanceof AuthError) {
        //     return;
        // }

        this.notificationService.error(exception);
    }
}