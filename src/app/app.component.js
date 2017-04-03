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
    }

    openMiniMenu({}) {
        this.isMenuOpen = true;
    }
}

export const AppComponent = {
    __selector__: 'app',
    template,
    controller: Controller
};