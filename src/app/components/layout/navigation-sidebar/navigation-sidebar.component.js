'use strict';

import './navigation-sidebar.less';
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
            icon: 'bell',
            text: 'Today'
        }, {
            state: 'tommorow',
            icon: 'calendar-check-o',
            text: 'Tommorow'
        }, {
            state: 'next7Days',
            icon: 'calendar',
            text: 'Next 7 days'
        }, {
            state: 'later',
            icon: 'road',
            text: 'Later'
        }];

        this.$transitions.onStart({}, t => this._onTransitionStart(t));
    }

    _onTransitionStart(transitions) {
        let nextState = transitions.to();
        let transitionItem = this.items.find(i => i.state === nextState.name);
        if (!transitionItem) {
            return;
        }

        transitionItem.inTransition = true;

        let onTransitionEnd = () => {
            transitionItem.inTransition = false;
        };
        transitions.promise.then(onTransitionEnd, onTransitionEnd);
    }
    
    hideMiniMenu() {
        this.onMiniMenuClosed(this.eventFactory.empty());
    }
}

export const NavigationSidebarComponent = {
    __name__: 'navigationSidebar',
    template,
    controller: Controller,
    bindings: {
        isMiniMenuOpen: '<',
        onMiniMenuClosed: '&'
    }
};