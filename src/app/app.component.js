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
        this.isMiniMenuOpen = false;
        this._miniModeChangedSubscription = this.screenDigestedService.subscribeOnMiniModeChanged(() => this._updateMiniMode());
    }

    $onDestroy() {
        this._miniModeChangedSubscription.remove();
    }

    _updateMiniMode() {
        this.miniMode = this.screenDigestedService.miniMode;
        if (!this.miniMode && this.isMiniMenuOpen) {
            this.isMiniMenuOpen = false;
        }
    }

    onOpenMiniMenu({}) {
        this.isMiniMenuOpen = true;
    }

    onCloseMiniMenu({}) {
        this.isMiniMenuOpen = false;
    }
}

export const AppComponent = {
    __name__: 'app',
    template,
    controller: Controller
};