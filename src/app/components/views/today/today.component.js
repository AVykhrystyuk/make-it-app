'use strict';

import '../styles.less';
import template from './today.html';

class Сontroller {
    constructor() {
        'ngInject';
    }
    $onInit() {
        this.overdueTasks = [{
            id: 1,
            text: 'Task 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }, {
            id: 2,
            text: 'Task 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quisquam voluptatem commodi, nam, quod rerum nobis tenetur laborum omnis neque optio, ipsam eum, vel cumque unde molestias consectetur magnam.'
        }];
    }

    $onChanges(changes) {
        if (changes.todaysData) {
            // this.todaysData = Object.assign({}, this.todaysData);
        }
    }

    hasOverdueTasks(){
        return this.overdueTasks && this.overdueTasks.length > 0;
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