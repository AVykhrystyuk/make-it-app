'use strict';

import './navigation-sidebar.component.less';
import template from './navigation-sidebar.html';

class Controller {
    constructor() {
        'ngInject';
    }

    $onInit() {}
}

export const NavigationSidebarComponent = {
    __selector__: 'navigationSidebar',
    template,
    controller: Controller
};