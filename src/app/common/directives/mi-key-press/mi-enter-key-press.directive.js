'use strict';

import {
    KeyPressBaseDirective
} from './mi-key-press-base.directive';

const directiveName = 'miEnterKeyPress';

export class EnterKeyPressDirective extends KeyPressBaseDirective {
    constructor($log, eventFactory) {
        super($log, eventFactory);

        this._supportedKeyCodes = [13];
    }

    __getSupportedKeyCodes() {
        return this._supportedKeyCodes;
    }

    __getDirectiveName() {
        return directiveName;
    }
}

export function EnterKeyPressDirectiveFactory($log, eventFactory) {
    'ngInject';
    return new EnterKeyPressDirective($log, eventFactory);
};

EnterKeyPressDirectiveFactory.__name__ = directiveName;