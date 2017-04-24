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
    }

    $onChanges(changes) {
        if (changes.todaysData) {
            // this.todaysData = Object.assign({}, this.todaysData);
        }
    }

    hasOverdueTasks() {
        return this.overdueTasks && this.overdueTasks.length > 0;
    }

    onOverdueTaskChanged({
        task
    }) {
        return this.todayService.updateOverdueTask(task);
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