'use strict';

import { TouchDeviceDetector } from 'touchDeviceDetector';

export class UibTooltipProvider {
    static configure($uibTooltipProvider) {
        'ngInject';

        let options = {
            appendToBody: true
        };

        var detector = new TouchDeviceDetector(window);
        if (detector.isTouchDevice()) {
            options.trigger = 'none';
        }

        $uibTooltipProvider.options(options);
    }
}