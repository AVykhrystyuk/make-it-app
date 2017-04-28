'use strict';

import './task-section.less';
import template from './task-section.html';

class Сontroller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
        this.taskViewModels = [];
    }

    $onInit() {
        this.header = this.header || "Task section";
        this.tasks = this.tasks || [];
    }

    onTaskItemChanged(event) {
        let task = event.task;
        let otherTasks = this.tasks.filter(t => t.id !== task.id);
        this._toggleEditable(otherTasks, false);

        return this.onTaskChanged(this.eventFactory.create(event))
            .finally(() => {
                this._toggleEditable(otherTasks, true);
            });
    }

    _toggleEditable(tasks, isEditable) {
        tasks.forEach(t => t.isEditable = isEditable);
    }
}

export const TaskSectionComponent = {
    __name__: 'taskSection',
    template,
    controller: Сontroller,
    bindings: {
        header: '<',
        tasks: '<',
        onTaskChanged: '&'
    }
};