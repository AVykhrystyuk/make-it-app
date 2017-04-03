'use strict';

import './navigation-inline.component.less';
import template from './navigation-inline.html';

class Controller {
    constructor(screenDigestedService) {
        'ngInject';
        this.screenDigestedService = screenDigestedService;
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
        //TODO: impl EventFactory wrapper
        // this.onMiniMenuOpen(
        //     this.EventFactory.create({
        //         todo: this.todo
        //     })
        // );
        // without EventFactory wrapper
        this.onMiniMenuOpen({
            $event: {}
        });
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