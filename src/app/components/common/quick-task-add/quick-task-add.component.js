'use strict';

import './quick-task-add.less';
import template from './quick-task-add.html';

class Сontroller {
    constructor(hostInfo) {
        'ngInject';
        this.hostInfo = hostInfo;

        this.datepicker = {
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
        if (this.datepicker.opened) {
            this.datepicker.opened = false;
        }
    }

    toggleDatepickerVisibility() {
        this.datepicker.opened = !this.datepicker.opened;
        this._updateDatepickerTooltip();
    }

    _updateDatepickerTooltip() {
        this.datepickerTooltip.trigger = this.hostInfo.isTouchDevice || this.datepicker.opened ? 'none' : 'mouseenter';
    }
}

export const QuickTaskAddComponent = {
    __name__: 'quickTaskAdd',
    template,
    controller: Сontroller
};