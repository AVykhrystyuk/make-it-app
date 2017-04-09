'use strict';

import './navigation-inline.component.less';
import template from './navigation-inline.html';

class Controller {
    constructor($transitions, screenDigestedService, eventFactory) {
        'ngInject';
        this.$transitions = $transitions;
        this.screenDigestedService = screenDigestedService;
        this.eventFactory = eventFactory;
    }
    $onInit() {
        this.searchMode = true;
        this.showTransition = false;
        this._miniModeChangedSubscription = this.screenDigestedService.subscribeOnMiniModeChanged(() => this._miniModeChanged());
        this.$transitions.onStart({}, t => this._onTransitionStart(t));
    }

    $onDestroy() {
        this._miniModeChangedSubscription.remove();
    }

    _onTransitionStart(transitions) {
        if (!this.screenDigestedService.miniMode) {
            return;
        }
        this.showTransition = true;
 
        let onTransitionEnd = () => {
            this.showTransition = false;
        };
        transitions.promise.then(onTransitionEnd, onTransitionEnd);
    }

    _miniModeChanged() {
        if (this.screenDigestedService.miniMode) {
            if (!this.searchMode) {
                this.searchMode = true;
            }
        }
    }

    toggleSearchVisibility() {
        this.searchMode = !this.searchMode;
    }

    openMiniMenu() {
        this.onMiniMenuOpen(this.eventFactory.empty());
    }
}

export const NavigationInlineComponent = {
    __name__: 'navigationInline',
    bindings: {
        onMiniMenuOpen: '&'
    },
    template,
    controller: Controller
};