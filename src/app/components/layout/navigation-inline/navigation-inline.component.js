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
        this._subscribeOnTransitions();
    }

    $onDestroy() {
        this._miniModeChangedSubscription.remove();
    }

    _subscribeOnTransitions() {
        this.$transitions.onStart({}, transitionStart);
        let self = this;

        function transitionStart(transitions) {
            if (!self.screenDigestedService.miniMode) {
                return;
            }
            self.showTransition = true;
            transitions.promise.finally((transitionEnd));
        }

        function transitionEnd() {
            self.showTransition = false;
        }
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