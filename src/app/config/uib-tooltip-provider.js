'use strict';

export class UibTooltipProvider {
    static configure($uibTooltipProvider) {
        'ngInject';

        $uibTooltipProvider.options({
            appendToBody: true
        });
    }
}