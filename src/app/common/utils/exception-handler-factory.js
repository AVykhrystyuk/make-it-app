'use strict';

export function $exceptionHandlerFactory($injector) {
    'ngInject'

    let exceptionHandlerService = null;

    function getExceptionHandlerService() {
        if (!exceptionHandlerService) {
            exceptionHandlerService = $injector.get('exceptionHandlerService');
        }

        return exceptionHandlerService;
    }

    return function exceptionHandler(exception, cause) {
        let service = getExceptionHandlerService();
        service.handle(exception, cause);
    }
}

$exceptionHandlerFactory.__name__ = '$exceptionHandler';