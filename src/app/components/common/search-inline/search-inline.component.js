'use strict';

import template from './search-inline.html';

class Сontroller {
    constructor(hostInfo) {
        'ngInject';
        this.hostInfo = hostInfo;
        this.tooltipTrigger = this.hostInfo.isTouchDevice ? 'none' : 'mouseenter';
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