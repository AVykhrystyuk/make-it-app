'use strict';

import template from './later.html';

class Сontroller {
    constructor() {
        'ngInject';
    }
    $onInit() {}
    
    $onChanges(changes) {
        if (changes.laterData) {
            // this.laterData = Object.assign({}, this.laterData);
        }
    }
}

export const LaterComponent = {
    __name__: 'later',
    template,
    controller: Сontroller,
    bindings: {
        laterData: '<'
    },
};