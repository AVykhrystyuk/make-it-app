'use strict';

const directiveName = 'autoFocus';

export class AutoFocusDirective {
    constructor($timeout) {
        'ngInject';
        this.restrict = 'A';
        this.$timeout = $timeout;
    }
    link($scope, $element, $attrs) {
        $attrs.$observe(directiveName, newValue => {
            if (!newValue) {
                return;
            }
            this.$timeout(() => $element[0].focus());
        });
    }
}

export function AutoFocusDirectiveFactory($timeout) {
    'ngInject';
    return new AutoFocusDirective($timeout);
};

AutoFocusDirectiveFactory.__name__ = directiveName;