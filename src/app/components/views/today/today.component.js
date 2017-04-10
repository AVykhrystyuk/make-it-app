'use strict';

import '../styles.less';
import template from './today.html';

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

export const TodayComponent = {
    __name__: 'today',
    template,
    controller: Сontroller,
    bindings: {
        todaysData: '<'
    },
};