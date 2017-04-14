'use strict';

import '../styles.less';
import template from './overdue-section.html';

class Сontroller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
    }

    $onInit() {}

    onTaskItemChanged(event) {
        this.onTaskChanged(this.eventFactory.create(event));
    }
}

export const OverdueSectionComponent = {
    __name__: 'overdueSection',
    template,
    controller: Сontroller,
    bindings: {
        tasks: '<',
        onTaskChanged: '&'
    }
};