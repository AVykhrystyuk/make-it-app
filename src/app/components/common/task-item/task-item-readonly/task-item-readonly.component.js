'use strict';

import './task-item-readonly.less';
import template from './task-item-readonly.html';

class Сontroller {
    constructor(eventFactory, tooltipTriggerService) {
        'ngInject';
        this.eventFactory = eventFactory;
        this.tooltipTriggerService = tooltipTriggerService;

        this.isEditing = false;
        this.tooltipTrigger = this.tooltipTriggerService.getTrigger();
    }

    $onInit() {
        if (this.isEditable === undefined) {
            this.isEditable = true;
        }
    }

    beginEdit() {
        if (!this.isEditable) {
            return;
        }

        this.onBeginEdit(this.eventFactory.empty());
    }
}

export const TaskItemReadonlyComponent = {
    __name__: 'taskItemReadonly',
    template,
    controller: Сontroller,
    bindings: {
        task: '<',
        isEditable: '<',
        onBeginEdit: '&'
    }
};