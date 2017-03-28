'use strict';

import angular from 'angular';

export class GlyphiconDirective {
    constructor() {
        'ngInject';
        this.restrict = 'A';
    }

    link($scope, $element, $attrs) {
        let iconId = $attrs.miGlyphicon;
        if (!iconId) {
            return;
        }

        $element.addClass('glyphiconized');

        let spanElement = angular.element('<span>')
            .addClass('glyphicon')
            .addClass(`glyphicon-${iconId}`)
            .attr('aria-hidden', true);

        $element.prepend(spanElement); //.append(spanElement);
    }
}

export function GlyphiconDirectiveFactory() {
    'ngInject';
    return new GlyphiconDirective();
};

GlyphiconDirectiveFactory.__selector__ = 'miGlyphicon';