'use strict';

import './task-item.less';
import template from './task-item.html';

class Сontroller {
    constructor($document, $window) {
        'ngInject';
        this.$document = $document;
        this.$window = $window;
    }
    $onInit() {
        this.isEditable = false;
    }

    $onChanges(changes) {
        if (changes.task) {
            //this.task = Object.assign({}, this.task);
        }
    }

    beginEdit() {
        this.editableTask = Object.assign({}, this.task);
        this.isEditable = true;
    }

    cancelEdit() {
        this.editableTask = null;
        this.isEditable = false;
    }

    saveEdit() {
        if (this.editableTask && this.editableTask.text) {
            Object.assign(this.task, this.editableTask);
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