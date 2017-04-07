'use strict';

export class AnimateProvider {
    static configure($animateProvider) {
        'ngInject';
        $animateProvider.classNameFilter(/^((?!(fa-spinner)).)*$/);
    }
}