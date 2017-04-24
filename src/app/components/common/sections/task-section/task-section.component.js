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
        if (changes.tasks) {
            this._updateTaskViewModels();
        }
    }

    $doCheck() {
        if (this.tasks.length !== this.taskViewModels.length) {
            this._updateTaskViewModels();
        }
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

    _updateTaskViewModels() {
        this.taskViewModels = this.tasks
            ? this.tasks.map(t => this._createTaskViewModel(t))
            : [];
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