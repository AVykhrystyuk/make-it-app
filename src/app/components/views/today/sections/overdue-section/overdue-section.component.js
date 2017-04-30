'use strict';

import template from './overdue-section.html';

class Сontroller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
    }

    $onInit() {}

    onOverdueTaskChanged(event) {
        return this.onTaskChanged(this.eventFactory.create(event));
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