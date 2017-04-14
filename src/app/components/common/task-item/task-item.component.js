'use strict';

import './task-item.less';
import template from './task-item.html';

const beginEditTaskEventName = 'taskItem: beginEditTask';

class Сontroller {
    constructor($document, $window, $rootScope, eventFactory) {
        'ngInject';
        this.$document = $document;
        this.$window = $window;
        this.$rootScope = $rootScope;
        this.eventFactory = eventFactory;
    }

    $onInit() {
        this.isEditable = false;
        this.beginEditTaskEventCleanUp = this.$rootScope.$on(beginEditTaskEventName, (event, args) => {
            if (args.taskId !== this.task.id) {
                this.cancelEdit();
            }
        });
    }

    $onDestroy() {
        this.beginEditTaskEventCleanUp();
    }

    $onChanges(changes) {
        if (changes.task) {
            //this.task = Object.assign({}, this.task);
        }
    }

    beginEdit() {
        this.editableTask = Object.assign({}, this.task);
        this.isEditable = true;
        this.$rootScope.$emit(beginEditTaskEventName, {
            taskId: this.task.id
        })
    }

    cancelEdit() {
        this.editableTask = null;
        this.isEditable = false;
    }

    saveEdit() {
        if (this.editableTask && this.editableTask.text) {
            this.onTaskChanged(this.eventFactory.create({
                task: this.editableTask
            }))
            //Object.assign(this.task, this.editableTask);
        }
        this.cancelEdit();
    }
}

export const TaskItemComponent = {
    __name__: 'taskItem',
    template,
    controller: Сontroller,
    bindings: {
        task: '<',
        onTaskChanged: '&'
    }
};