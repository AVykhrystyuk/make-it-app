'use strict';

import template from './search-inline.html';

class Сontroller {
    constructor() {
        'ngInject';
    }
    $onInit() {}
    onSubmit() {
        console.log('search-inline: onSubmit');
    }
}

export const SearchInlineComponent = {
    __selector__: 'searchInline',
    template,
    controller: Сontroller
};