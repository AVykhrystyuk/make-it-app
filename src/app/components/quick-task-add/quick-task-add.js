'use strict';

import template from './quick-task-add.html';

export default function register(app) {
    app.component('quickTaskAdd', {
        template: template,
        controller: Controller
    })
};

function Controller() {
    'ngInject';
}