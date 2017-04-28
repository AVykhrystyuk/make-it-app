'use strict';

import '../styles.less';
import template from './done-section.html';

class Сontroller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
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