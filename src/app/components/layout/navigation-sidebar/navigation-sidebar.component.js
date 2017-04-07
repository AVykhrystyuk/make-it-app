'use strict';

import './navigation-sidebar.component.less';
import template from './navigation-sidebar.html';

class Controller {
    constructor($transitions, eventFactory) {
        'ngInject';
        this.$transitions = $transitions;
        this.eventFactory = eventFactory;
    }

    $onInit() {
        this.items = [{
            state: 'today',
            glyphicon: 'bell',
            text: 'Today'
        }, {
            state: 'tommorow',
            glyphicon: 'screenshot',
            text: 'Tommorow'
        }, {
            state: 'next7Days',
            glyphicon: 'calendar',
            text: 'Next 7 days'
        }, {
            state: 'later',
            glyphicon: 'road',
            text: 'Later'
        }];

        this.items.forEach(item => this._onEachItem(item));
    }

    // $onChanges(changes) {
    //     if (changes.isMenuOpen) {
    //     }
    // }

    hideMiniMenu() {
        this.onMiniMenuClosed(this.eventFactory.empty());
    }

    _onEachItem(item) {
        let criteria = {
            to: `${item.state}.**`
        };
        this.$transitions.onStart(criteria, transitionStart);

        function transitionStart(transitions) {
            item.inTransition = true;
            transitions.promise.finally(transitionEnd);
        }

        function transitionEnd() {
            item.inTransition = false;
        }
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