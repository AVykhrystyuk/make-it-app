'use strict';

import template from './today-section.html';

class Сontroller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
    }

    $onInit() {}

    onTodayTaskChanged(event) {
        return this.onTaskChanged(this.eventFactory.create(event));
    }
}

export const TodaySectionComponent = {
    __name__: 'todaySection',
    template,
    controller: Сontroller,
    bindings: {
        tasks: '<',
        onTaskChanged: '&'
    }
};