'use strict';

import './quick-task-add.less';
import template from './quick-task-add.html';

class Сontroller {
    constructor(hostInfo) {
        'ngInject';
        this.hostInfo = hostInfo;

        this.datepickerPopup = {
            selectedDate: new Date(),
            opened: false,
            options: {
                showWeeks: false
            }
        };

        this.datepickerTooltip = {
            trigger: this.hostInfo.isTouchDevice ? 'none' : 'mouseenter',
            text: 'Click to choose a day',
        };
    }

    $onInit() {
        this._updateDatepickerTooltip();
    }

    submit() {
        console.log('quick-task-add: onSubmit');
    }

    onSelectedDateChanged() {
        console.log('onSelectedDateChanged');
    }

    toggleDatepickerVisibility() {
        this.datepickerPopup.opened = !this.datepickerPopup.opened;
        this._updateDatepickerTooltip();
    }

    _updateDatepickerTooltip() {
        this.datepickerTooltip.trigger = this.hostInfo.isTouchDevice || this.datepickerPopup.opened ? 'none' : 'mouseenter';
    }
}

export const QuickTaskAddComponent = {
    __name__: 'quickTaskAdd',
    template,
    controller: Сontroller
};