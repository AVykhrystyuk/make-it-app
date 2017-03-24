'use strict';

import './app.component.less';
import template from './app.component.html';

export default function register(app) {
    app.component('app', {
        template: template,
        controller: Controller,
    })
};

function Controller() {
    'ngInject';
}