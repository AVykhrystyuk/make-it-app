import {ScreenService} from './screen.service.js';

export class ScreenDigestedService extends ScreenService {
    static get __selector__() {
        return 'screenDigestedService';
    }

    constructor($window, screenSizeLimits, $rootScope) {
        'ngInject';
        super($window, screenSizeLimits);
        this.$rootScope = $rootScope;
    }

    __onAfterMiniModeChanged() {
        // manuall $digest required as resize event is outside of angular
        this.$rootScope.$digest();
    }
}