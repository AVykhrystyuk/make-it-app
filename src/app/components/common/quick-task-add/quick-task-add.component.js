'use strict';

import './quick-task-add.less';
import template from './quick-task-add.html';

class Сontroller {
    constructor(tooltipTriggerService) {
        'ngInject';
        this.tooltipTriggerService = tooltipTriggerService;

        this.datepickerPopup = {
            selectedDate: new Date(),
            opened: false,
            options: {
                showWeeks: false,
                minDate: new Date()
            }
        };

        this.datepickerTooltip = "none";
        this.tooltipTrigger = this.tooltipTriggerService.getTrigger();
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
        this.datepickerTooltip = this.datepickerPopup.opened ? "Click to close" : "Click to choose a day";
    }
}

export const QuickTaskAddComponent = {
    __name__: 'quickTaskAdd',
    template,
    controller: Сontroller
};