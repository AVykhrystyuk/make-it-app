'use strict';

import '../styles.less';
import template from './overdue-section.html';

class Сontroller {
    constructor() {
        'ngInject';
    }
    $onInit() { }
}

export const OverdueSectionComponent = {
    __name__: 'overdueSection',
    template,
    controller: Сontroller,
    bindings: {
        tasks: '<'
    }
};