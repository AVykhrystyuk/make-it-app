'use strict';

import './task-item.less';
import template from './task-item.html';
import eventNames from './task-item.events.js';

class Сontroller {
    constructor($rootScope, eventFactory, hostInfo, taskItemOptionsFactory) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.eventFactory = eventFactory;
        this.hostInfo = hostInfo;
        this.taskItemOptionsFactory = taskItemOptionsFactory;

        this.isEditing = false;
    }

    $onInit() {
        if (this.isEditable === undefined) {
            this.isEditable = true;
        }

        if (this.checked === undefined) {
            this.checked = false;
        }

        this.options = this.options || this.taskItemOptionsFactory.createDefaultOptions();
    }

    onBeginEdit() {
        let args = {
            taskId: this.task.id,
            promise: null
        };
        this.$rootScope.$emit(eventNames.beginEditTaskRequest, args);
        if (args.promise) {
            args.promise.then(() => {
                this._turnOnEditing();
            });
        } else {
            this._turnOnEditing();
        }
    }

    onSaveEdit(event) {
        return this.onTaskChanged(this.eventFactory.create(event))
            .then(resultedTask => {
                Object.assign(this.task, resultedTask);
                this.onCancelEdit();
            });
    }

    onCancelEdit() {
        this._turnOffEditing();
    }

    _turnOffEditing() {
        this.isEditing = false;
    }

    _turnOnEditing() {
        this.isEditing = true;
    }
}

export const TaskItemComponent = {
    __name__: 'taskItem',
    template,
    controller: Сontroller,
    bindings: {
        options: '<',
        task: '<',
        isEditable: '<',
        onTaskChanged: '&'
    }
};