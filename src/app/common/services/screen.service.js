import angular from 'angular';
import {
    EventEmitter
} from 'fbemitter';

export class ScreenService {
    static get __selector__() {
        return 'screenService';
    }

    constructor($window, screenSizeLimits) {
        'ngInject';
        this.$window = $window;
        this.screenSizeLimits = screenSizeLimits;
        this._init();
    }

    _init() {
        this._emitter = new EventEmitter();
        this._miniMode = false;
        this.windowElement = angular.element(this.$window);
        this.windowElement.on('resize', () => this.miniMode = this.evaluateMiniMode());

        this._miniMode = this.evaluateMiniMode();
    }

    evaluateMiniMode() {
        let width = this.$window.innerWidth;
        return width < this.screenSizeLimits.xsMax;
    }

    __onBeforeMiniModeChanged() {}
    __onAfterMiniModeChanged() {}

    subscribeOnMiniModeChanged(listener) {
        return this._emitter.addListener('miniModeChanged', listener);
    }

    get miniMode() {
        return this._miniMode;
    }

    set miniMode(value) {
        if (this._miniMode === value) {
            return;
        }
        this._miniMode = value;

        this.__onBeforeMiniModeChanged();
        this._emitter.emit('miniModeChanged');
        this.__onAfterMiniModeChanged();
    }
}