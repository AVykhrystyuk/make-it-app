'use strict';

import './app.component.less';
import template from './app.component.html';

class Controller {
    constructor() {
        'ngInject';
    }
    $onInit() {}
}

export const AppComponent = {
    __selector__: 'app',
    template,   
    controller: Controller
};