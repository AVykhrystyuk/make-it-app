'use strict';

export function $exceptionHandlerFactory($log, $injector) {
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

    let exceptionHandlerService = null;

    function getExceptionHandlerService() {
        if (!exceptionHandlerService) {
            exceptionHandlerService = $injector.get('exceptionHandlerService');
        }

        return exceptionHandlerService;
    }

    return function exceptionHandler(exception, cause) {
        if (ignorePatterns.some(pattern => pattern.test(exception))) {
            return;
        }

        let service = getExceptionHandlerService();
        service.handle(exception);

        $log.error(exception, ', cause:', cause);
    }
}

$exceptionHandlerFactory.__name__ = '$exceptionHandler';