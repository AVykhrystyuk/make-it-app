'use strict';

import './task-item-readonly.less';
import template from './task-item-readonly.html';

class Сontroller {
    constructor(eventFactory, tooltipTriggerService, taskItemOptionsFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
        this.tooltipTriggerService = tooltipTriggerService;
        this.taskItemOptionsFactory = taskItemOptionsFactory;

        this.isEditing = false;
        this.tooltipTrigger = this.tooltipTriggerService.getTrigger();
    }

    $onInit() {
        if (this.isEditable === undefined) {
            this.isEditable = true;
        }

        this.options = this.options || this.taskItemOptionsFactory.createReadonlyDefaultOptions();
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
        options: '<',
        task: '<',
        isEditable: '<',
        onBeginEdit: '&'
    }
};