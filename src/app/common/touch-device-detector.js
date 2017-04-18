'use strict';

export default class TouchDeviceDetector {
    constructor(window) {
        'ngInject';
        this.window = window;
    }

    isTouchDevice() {
        let isTouchDevice = false;

        if ('ontouchstart' in this.window // works on most browsers 
            || this.window.navigator.maxTouchPoints // works on IE10/11 and Surface
            || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
            isTouchDevice = true;
        }

        return isTouchDevice;
    }
}