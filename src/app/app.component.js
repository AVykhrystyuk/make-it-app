'use strict';

import './app.component.less';
import template from './app.component.html';

export const AppComponent = {
    __selector__: 'app',
    template,   
    controller: Controller
};

function Controller() {
    'ngInject';
}