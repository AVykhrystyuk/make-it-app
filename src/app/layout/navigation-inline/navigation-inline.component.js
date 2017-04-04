'use strict';

import './navigation-inline.component.less';
import template from './navigation-inline.html';

class Controller {
    constructor(screenDigestedService, eventFactory) {
        'ngInject';
        this.screenDigestedService = screenDigestedService;
        this.eventFactory = eventFactory;
    }
    $onInit() {
        this.searchMode = true;
        this._miniModeChangedSubscription = this.screenDigestedService.subscribeOnMiniModeChanged(() => this._miniModeChanged());
    }

    $onDestroy() {
        this._miniModeChangedSubscription.remove();
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
    __selector__: 'navigationInline',
    bindings: {
        onMiniMenuOpen: '&'
    },
    template,
    controller: Controller
};