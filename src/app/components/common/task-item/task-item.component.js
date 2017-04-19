'use strict';

import './task-item.less';
import template from './task-item.html';

const eventNames = {
    beginEditTaskRequest: 'taskItem: beginEditTask'
};

class Сontroller {
    constructor($document, $window, $rootScope, eventFactory, hostInfo) {
        'ngInject';
        this.$document = $document;
        this.$window = $window;
        this.$rootScope = $rootScope;
        this.eventFactory = eventFactory;
        this.hostInfo = hostInfo;

        this.isEditing = false;
        this.saving = false;

        this.beginEditTaskEventCleanUp = this.$rootScope.$on(eventNames.beginEditTaskRequest, (event, args) => {
            if (args.taskId !== this.task.id) {
                args.promise = this.saveEdit();
            }
        });

        this.tooltipTrigger = this.hostInfo.isTouchDevice ? 'none' : 'mouseenter';
    }

    $onDestroy() {
        this.beginEditTaskEventCleanUp();
    }

    $onInit() {
        if (this.isEditable === undefined) {
            this.isEditable = true;
        }
    }

    $onChanges(changes) {
        if (changes.task) {
            this.task = Object.assign({}, this.task);
        }
    }

    beginEdit() {
        if (!this.isEditable) {
            return;
        }

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

    cancelEdit() {
        this._turnOffEditing();
    }

    saveEdit() {
        if (this.saving) {
            return;
        }

        if (!this._isEditableTaskValid()) {
            return;
        }

        if (!this._isTaskChanged()) {
            this.cancelEdit();
            return;
        }

        this.saving = true;
        return this.onTaskChanged(this.eventFactory.create({
                task: this.editableTask
            }))
            .then(resultedTask => {
                Object.assign(this.task, resultedTask);
                this.cancelEdit();
            })
            .finally(() => {
                this.saving = false;
            });
    }

    _isTaskChanged() {
        return this.editableTask.text !== this.task.text;
    }

    _isEditableTaskValid() {
        return this.editableTask && this.editableTask.text;
    }

    _turnOffEditing() {
        this.editableTask = null;
        this.isEditing = false;
    }

    _turnOnEditing() {
        this.editableTask = Object.assign({}, this.task);
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