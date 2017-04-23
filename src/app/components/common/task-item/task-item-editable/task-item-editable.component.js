'use strict';

import './task-item-editable.less';
import template from './task-item-editable.html';
import eventNames from '../task-item.events.js';

class Сontroller {
    constructor($rootScope, eventFactory, hostInfo) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.eventFactory = eventFactory;
        this.hostInfo = hostInfo;

        this.saving = false;
        this.editableTaskFocused = false;
        this.tooltipTrigger = this.hostInfo.isTouchDevice ? 'none' : 'mouseenter';

        this.datepickerPopup = {
            opened: false,
            options: {
                showWeeks: false,
                minDate: new Date()
            }
        };

        this.beginEditTaskEventCleanUp = this.$rootScope.$on(eventNames.beginEditTaskRequest, (event, args) => {
            if (args.taskId !== this.task.id) {
                args.promise = this.saveEdit();
            }
        });
    }

    $onDestroy() {
        this.beginEditTaskEventCleanUp();
    }

    $onInit() {}

    $onChanges(changes) {
        this.editableTask = changes.task
            ? Object.assign({}, this.task)
            : null;
    }

    toggleDatepickerVisibility() {
        this.datepickerPopup.opened = !this.datepickerPopup.opened;
        if (this.datepickerPopup.opened) {
            this.editableTaskFocused = false;
        }
    }

    onSelectedDateChanged() {
        this.editableTaskFocused = true;
    }

    cancelEdit() {
        this.onCancelEdit(this.eventFactory.empty());
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
        return this.onSaveEdit(this.eventFactory.create({
                task: this.editableTask
            }))
            .finally(() => {
                this.saving = false;
            });
    }

    _isTaskChanged() {
        return this.editableTask.text !== this.task.text || this.editableTask.date !== this.task.date;
    }

    _isEditableTaskValid() {
        return this.editableTask && this.editableTask.text && this.editableTask.date;
    }
}

export const TaskItemEditableComponent = {
    __name__: 'taskItemEditable',
    template,
    controller: Сontroller,
    bindings: {
        task: '<',
        onCancelEdit: '&',
        onSaveEdit: '&'
    }
};