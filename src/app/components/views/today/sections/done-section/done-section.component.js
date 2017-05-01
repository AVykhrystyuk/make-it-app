'use strict';

import template from './done-section.html';

class Сontroller {
    constructor(eventFactory, taskItemOptionsFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
        this.taskItemOptionsFactory = taskItemOptionsFactory;

        this.taskSectionOptions = this.taskItemOptionsFactory.createDefaultOptions();
        this.taskSectionOptions.readonly.hideDate = true;
    }

    $onInit() {}

    onDoneTaskChanged(event) {
        return this.onTaskChanged(this.eventFactory.create(event));
    }
}

export const DoneSectionComponent = {
    __name__: 'doneSection',
    template,
    controller: Сontroller,
    bindings: {
        tasks: '<',
        onTaskChanged: '&'
    }
};