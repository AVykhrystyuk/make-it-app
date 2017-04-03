'use strict';

import './navigation-sidebar.component.less';
import template from './navigation-sidebar.html';

class Controller {
    constructor() {
        'ngInject';
    }

    $onInit() {
        this.isMenuOpen = false;
    }

    hideMiniMenu() {
        this.isMenuOpen = false;
    }
}

export const NavigationSidebarComponent = {
    __selector__: 'navigationSidebar',
    bindings: {
        options: '<',
        isMenuOpen: '='
    },
    template,
    controller: Controller
};