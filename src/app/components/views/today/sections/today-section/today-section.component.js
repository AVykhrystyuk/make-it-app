'use strict';

import template from './today-section.html';

class Сontroller {
    constructor(eventFactory, taskItemOptionsFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
        this.taskItemOptionsFactory = taskItemOptionsFactory;
        
        this.taskSectionOptions = this.taskItemOptionsFactory.createDefaultOptions();
        this.taskSectionOptions.readonly.hideDate = true;
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