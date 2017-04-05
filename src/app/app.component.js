'use strict';

import './app.component.less';
import template from './app.component.html';

class Controller {
    constructor(screenDigestedService) {
        'ngInject';
        this.screenDigestedService = screenDigestedService;
        this._updateMiniMode();
    }
    $onInit() {
        this.isMenuOpen = false;
        this._miniModeChangedSubscription = this.screenDigestedService.subscribeOnMiniModeChanged(() => this._updateMiniMode());
    }

    $onDestroy() {
        this._miniModeChangedSubscription.remove();
    }

    _updateMiniMode() {
        this.miniMode = this.screenDigestedService.miniMode;
        if (!this.miniMode && this.isMenuOpen) {
            this.isMenuOpen = false;
        }
    }

    onOpenMiniMenu({}) {
        this.isMenuOpen = true;
    }

    onCloseMiniMenu({}) {
        this.isMenuOpen = false;
    }
}

export const AppComponent = {
    __name__: 'app',
    template,
    controller: Controller
};