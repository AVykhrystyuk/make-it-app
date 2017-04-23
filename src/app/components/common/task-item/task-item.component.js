'use strict';

import './task-item.less';
import template from './task-item.html';
import eventNames from './task-item.events.js';

class Сontroller {
    constructor($rootScope, eventFactory, hostInfo) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.eventFactory = eventFactory;
        this.hostInfo = hostInfo;

        this.isEditing = false;
    }

    $onInit() {
        if (this.isEditable === undefined) {
            this.isEditable = true;
        }
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
        task: '<',
        isEditable: '<',
        onTaskChanged: '&'
    }
};