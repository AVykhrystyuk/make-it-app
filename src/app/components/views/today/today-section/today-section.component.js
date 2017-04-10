'use strict';

import template from './today-section.html';

class Сontroller {
    constructor() {
        'ngInject';
    }
    $onInit() {}
    
    $onChanges(changes) {
        if (changes.todaysData) {
            // this.todaysData = Object.assign({}, this.todaysData);
        }
    }
}

export const TodaySectionComponent = {
    __name__: 'todaySection',
    template,
    controller: Сontroller,
    bindings: {
        todaysData: '<'
    },
};