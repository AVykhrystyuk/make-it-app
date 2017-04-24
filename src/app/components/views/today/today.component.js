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
        this.overdueTasks = this.todaysData.overdueTasks;
        this.todayTasks = this.todaysData.todayTasks;
    }

    hasOverdueTasks() {
        return this.overdueTasks && this.overdueTasks.length > 0;
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

    onTaskCreated({
        task
    }) {
        return this.todayService.createNewTask(task)
            .then(resultedTask => {
                this.todayTasks.push(resultedTask);
            });
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