'use strict';

import './task-item.less';
import template from './task-item.html';

class Сontroller {
    constructor() {
        'ngInject';
    }
    $onInit() {}
}

export const TaskItemComponent = {
    __name__: 'taskItem',
    template,
    controller: Сontroller,
    bindings: {
        task: '<',
        onTaskChanged: '&'
    }
};