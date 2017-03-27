'use strict';

import angular from 'angular';

export function GlyphiconDirective($timeout) {
    'ngInject';
    return {
        restrict: 'A',
        link($scope, $element, $attrs) {
            if (!$attrs.iconId) {
                return;
            }

            $element.addClass('glyphiconized');

            let spanElement = angular.element('<span>')
                .addClass('glyphicon')
                .addClass(`glyphicon-${$attrs.iconId}`)
                .attr('aria-hidden', true);

            $element.append(spanElement);
        }
    }
};

GlyphiconDirective.__selector__ = 'miGlyphicon';