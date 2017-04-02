'use strict';

import './navigation-inline.component.less';
import template from './navigation-inline.html';
import angular from 'angular';

class Controller {
    constructor($rootScope, $window, screenSizeLimits) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.$window = $window;
        this.screenSizeLimits = screenSizeLimits;
    }

    $onInit() {
        this.searchMode = true;
        this.windowElement = angular.element(this.$window);
        this._windowResized = () => {
            let width = this.$window.innerWidth;
            if (width < this.screenSizeLimits.xsMax) {
                if (!this.searchMode) {
                    this.searchMode = true;
                    // manuall $digest required as resize event is outside of angular
                    this.$rootScope.$digest();
                }
            }
        }

        this.windowElement.on('resize', this._windowResized);
    }

    $onDestroy() {
        this.windowElement.off('resize', this._windowResized);
    }

    setSearchVisibility(visible) {
        if (this.searchMode === visible) {
            return;
        }

        this.searchMode = visible;
    }
}

export const NavigationInlineComponent = {
    __selector__: 'navigationInline',
    template,
    controller: Controller
};