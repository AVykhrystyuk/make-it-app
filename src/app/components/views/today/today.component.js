'use strict';

import '../styles.less';
import template from './today.html';

class Сontroller {
    constructor(todayService) {
        'ngInject';
        this.todayService = todayService;
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
        let promise = this.todayService.updateOverdueTask(task);
        return promise;
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