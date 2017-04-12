'use strict';

import {
    KeyPressBaseDirective
} from './mi-key-press-base.directive';

const directiveName = 'miEscKeyPress';

export class EscKeyPressDirective extends KeyPressBaseDirective {
    constructor($log, eventFactory) {
        super($log, eventFactory);

        this._supportedKeyCodes = [27];
    }

    __getSupportedKeyCodes() {
        return this._supportedKeyCodes;
    }

    __getDirectiveName() {
        return directiveName;
    }
}

export function EscKeyPressDirectiveFactory($log, eventFactory) {
    'ngInject';
    return new EscKeyPressDirective($log, eventFactory);
};

EscKeyPressDirectiveFactory.__name__ = directiveName;