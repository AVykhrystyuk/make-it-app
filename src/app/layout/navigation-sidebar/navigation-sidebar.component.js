'use strict';

import './navigation-sidebar.component.less';
import template from './navigation-sidebar.html';

class Controller {
    constructor(eventFactory) {
        'ngInject';
        this.eventFactory = eventFactory;
    }

    $onInit() {
        this.items = [{
            url: 'today',
            glyphicon: 'bell',
            text: 'Today'
        }, {
            url: 'tommorow',
            glyphicon: 'screenshot',
            text: 'Tommorow'
        }, {
            url: 'next7Days',
            glyphicon: 'calendar',
            text: 'Next 7 days'
        }, {
            url: 'later',
            glyphicon: 'road',
            text: 'Later'
        }]
    }

    // $onChanges(changes) {
    //     if (changes.isMenuOpen) {
    //     }
    // }

    hideMiniMenu() {
        this.onMiniMenuClosed(this.eventFactory.empty());
    }
}

export const NavigationSidebarComponent = {
    __name__: 'navigationSidebar',
    bindings: {
        isMenuOpen: '<',
        onMiniMenuClosed: '&'
    },
    template,
    controller: Controller
};