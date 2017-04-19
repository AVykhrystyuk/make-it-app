'use strict';

import './navigation-inline.less';
import template from './navigation-inline.html';

class Controller {
    constructor($transitions, screenDigestedService, eventFactory, hostInfo) {
        'ngInject';
        this.$transitions = $transitions;
        this.screenDigestedService = screenDigestedService;
        this.eventFactory = eventFactory;
        this.hostInfo = hostInfo;

        this.searchMode = true;
        this.showTransition = false;
        this.modeInfo = {
            icon: 'none',
            tooltip: 'none'
        };
        this.tooltipTrigger = this.hostInfo.isTouchDevice ? 'none' : 'mouseenter';
        this._miniModeChangedSubscription = this.screenDigestedService.subscribeOnMiniModeChanged(() => this._miniModeChanged());
        this.$transitions.onStart({}, t => this._onTransitionStart(t));
    }

    $onInit() {
        this._updateModeInfo(this.searchMode);
    }

    $onDestroy() {
        this._miniModeChangedSubscription.remove();
    }

    toggleSearchMode() {
        this.searchMode = !this.searchMode;
        this._updateModeInfo(this.searchMode);
    }

    openMiniMenu() {
        this.onMiniMenuOpen(this.eventFactory.empty());
    }

    _updateModeInfo(searchMode) {
        this.modeInfo.icon = searchMode ? 'plus' : 'search';
        this.modeInfo.tooltip = searchMode ? 'Toggle to add task' : 'Toggle to search';            
    }

    _miniModeChanged() {
        if (this.screenDigestedService.miniMode) {
            if (!this.searchMode) {
                this.searchMode = true;
            }
        }
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
}

export const NavigationInlineComponent = {
    __name__: 'navigationInline',
    template,
    controller: Controller,
    bindings: {
        onMiniMenuOpen: '&'
    },
};