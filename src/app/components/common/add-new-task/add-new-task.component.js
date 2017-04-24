'use strict';

import './add-new-task.less';
import template from './add-new-task.html';
import eventNames from 'taskItem/task-item.events.js';

class Сontroller {
    constructor($rootScope, eventFactory) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.eventFactory = eventFactory;

        this.isInCreateMode = false;
    }

    $onInit() {}

    runCreateMode() {
        this.newTask = {
            date: this.defaultDate,
            text: ''
        };

        let args = {
            promise: null
        };
        this.$rootScope.$emit(eventNames.beginEditTaskRequest, args);
        if (args.promise) {
            args.promise.then(() => {
                this._turnOnCreateMode();
            });
        } else {
            this._turnOnCreateMode();
        }
    }

    onNewTaskEdited(event) {
        return this.onNewTaskCreated(this.eventFactory.create(event))
            .then(() => {
                this._turnOffCreateMode();
            });
    }

    onCancelCreateMode() {
        this._turnOffCreateMode();
    }

    _turnOffCreateMode() {
        this.isInCreateMode = false;
    }

    _turnOnCreateMode() {
        this.isInCreateMode = true;
    }
}

export const AddNewTaskComponent = {
    __name__: 'addNewTask',
    template,
    controller: Сontroller,
    bindings: {
        defaultDate: '<',
        onNewTaskCreated: '&'
    }
};