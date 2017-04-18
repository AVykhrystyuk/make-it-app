'use strict';

export class KeyPressBaseDirective {
    constructor($log, eventFactory) {
        this.$log = $log;
        this.eventFactory = eventFactory;
        this.restrict = 'A';
    }

    __getSupportedKeyCodes() {
        return [];
    }

    __getDirectiveName() {
        return null;
    }

    link($scope, $element, $attrs) {
        $element.bind('keydown keypress', event => this._onKeyPress($scope, $element, $attrs, event));
    }

    _onKeyPress($scope, $element, $attrs, event) {
        let supportedKeyCodes = this.__getSupportedKeyCodes();
        if (!supportedKeyCodes || supportedKeyCodes.length < 1) {
            this.$log.error("[mi-key-press directive]: 'supportedKeyCodes' is not provided.");
            return;
        }

        let isCodeSupported = supportedKeyCodes.some(k => event.which === k);
        if (!isCodeSupported) {
            return;
        }

        let directiveName = this.__getDirectiveName();
        if (!directiveName) {
            this.$log.error("[mi-key-press directive]: 'directiveName' is not provided.");
            return;
        }

        $scope.$apply(() => {
            let func = $attrs[directiveName];
            $scope.$eval(func, this.eventFactory.create(event));
        });

        event.preventDefault();
    }
}