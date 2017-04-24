'use strict';

import '../styles.less';
import template from './task-section.html';

class Сontroller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
        this.taskViewModels = [];
    }

    $onInit() {
        if (this.header === undefined) {
            this.header = "Task section";
        }
    }

    $onChanges(changes) {
        this.taskViewModels = changes.tasks && this.tasks
            ? this.tasks.map(t => this._createTaskViewModel(t))
            : [];
    }

    onTaskItemChanged(event) {
        let task = event.task;
        let otherTaskViewModels = this.taskViewModels.filter(vm => vm.task.id !== task.id);
        this._toggleEditable(otherTaskViewModels, false);

        return this.onTaskChanged(this.eventFactory.create(event))
            .finally(() => {
                this._toggleEditable(otherTaskViewModels, true);
            });
    }

    _createTaskViewModel(task) {
        return {
            task: task,
            isEditable: true
        };
    }

    _toggleEditable(taskViewModels, isEditable) {
        taskViewModels.forEach(vm => vm.isEditable = isEditable);
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