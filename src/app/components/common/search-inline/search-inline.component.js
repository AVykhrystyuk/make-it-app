'use strict';

import template from './search-inline.html';

class Сontroller {
    constructor(tooltipTriggerService) {
        'ngInject';
        this.tooltipTriggerService = tooltipTriggerService;
        this.tooltipTrigger = this.tooltipTriggerService.getTrigger();
    }
    $onInit() {}
    submit() {
        console.log('search-inline: onSubmit');
    }
}

export const SearchInlineComponent = {
    __name__: 'searchInline',
    template,
    controller: Сontroller
};