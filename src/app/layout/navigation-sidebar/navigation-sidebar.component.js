'use strict';

import './navigation-sidebar.component.less';
import template from './navigation-sidebar.html';

class Controller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
    }

    $onInit() {}

    // $onChanges(changes) {
    //     if (changes.isMenuOpen) {
    //     }
    // }

    hideMiniMenu() {
        this.onMiniMenuClosed(this.eventFactory.empty());
    }
}

export const NavigationSidebarComponent = {
    __selector__: 'navigationSidebar',
    bindings: {
        isMenuOpen: '<',
        onMiniMenuClosed: '&'
    },
    template,
    controller: Controller
};