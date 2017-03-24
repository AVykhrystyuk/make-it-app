'use strict';

import template from './search-inline.html';

export default function register(app) {
    app.component('searchInline', {
        template: template,
        controller: Controller
    })
};

function Controller() {
    'ngInject';
}