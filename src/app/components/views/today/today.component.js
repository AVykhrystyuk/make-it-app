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
        this.overdueTasks = this.todaysData.overdueTasks || [];
        this.todayTasks = this.todaysData.todayTasks || [];
        this.doneTasks = this.todaysData.doneTasks || [];
    }

    hasOverdueTasks() {
        return this.overdueTasks.length > 0;
    }

    hasDoneTasks() {
        return this.doneTasks.length > 0;
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