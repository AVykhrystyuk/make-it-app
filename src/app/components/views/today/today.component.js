'use strict';

import '../styles.less';
import './today.less';
import template from './today.html';

class Сontroller {
    constructor(todayService) {
        'ngInject';
        this.todayService = todayService;
        this.date = new Date();
    }

    $onInit() {
        this.overdueTaskViewModels = this.todaysData.overdueTasks.map(t => this._createTaskViewModel(t)) || [];
        this.todayTaskViewModels = this.todaysData.todayTasks.map(t => this._createTaskViewModel(t)) || [];
        this.doneTaskViewModels = this.todaysData.doneTasks.map(t => this._createDoneTaskViewModel(t)) || [];
    }

    hasOverdueTasks() {
        return this.overdueTaskViewModels.length > 0;
    }

    hasDoneTasks() {
        return this.doneTaskViewModels.length > 0;
    }

    onOverdueTaskChanged({
        task
    }) {
        return this.todayService.updateOverdueTask(task);
    }

    onTodayTaskChanged({
        task
    }) {
        return this.todayService.updateTodayTask(task);
    }

    onDoneTaskChanged({
        task
    }) {
        return this.todayService.updateDoneTask(task);
    }

    onTaskCreated({
        task
    }) {
        return this.todayService.createNewTask(task)
            .then(resultedTask => {
                this.todayTaskViewModels.push(resultedTask);
            });
    }

    _createTaskViewModel(task) {
        return {
            id: task.id,
            text: task.text,
            date: task.date,
            isEditable: true
        }
    }

    _createDoneTaskViewModel(task) {
        let taskViewModel = this._createTaskViewModel(task);
        taskViewModel.checked = true;
        return taskViewModel;
    }
}

export const TodayComponent = {
    __name__: 'today',
    template,
    controller: Сontroller,
    bindings: {
        todaysData: '<'
    },
};