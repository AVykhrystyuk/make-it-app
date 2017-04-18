'use strict';

const directiveName = 'datepickerAutoFocus';

export class DatepickerAutoFocusDirective {
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

            let element = $element[0];

            this.$timeout(() => {
                let uibDaypickerElement = element.querySelector('.uib-daypicker');
                uibDaypickerElement.focus();
            }, 200);
        });
    }
}

export function DatepickerAutoFocusDirectiveFactory($timeout) {
    'ngInject';
    return new DatepickerAutoFocusDirective($timeout);
};

DatepickerAutoFocusDirectiveFactory.__name__ = directiveName;