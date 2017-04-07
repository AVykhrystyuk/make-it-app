'use strict';

import angular from 'angular';

const directiveName = 'miGlyphicon';

export class GlyphiconDirective {
    constructor() {
        'ngInject';
        this.restrict = 'A';
    }

    _getIconClass(iconId) {
        return `glyphicon-${iconId}`;
    }

    _updateOrCreateChildElement($element, iconId) {
        if (!iconId) {
            return;
        }

        let iElement = $element[0].querySelector('i.glyphicon');
        if (iElement) {
            iElement = angular.element(iElement);
            let oldIconId = iElement.attr('icon-id');
            iElement
                .removeClass(this._getIconClass(oldIconId))
                .attr('icon-id', iconId)
                .addClass(this._getIconClass(iconId));
            return;
        }

        $element.addClass('glyphiconized');

        iElement = angular.element('<i>')
            .attr('icon-id', iconId)
            .addClass('glyphicon')
            .addClass(this._getIconClass(iconId))
            .attr('aria-hidden', true);

        $element.prepend(iElement);
    }

    link($scope, $element, $attrs) {
        $attrs.$observe(directiveName, newValue => this._updateOrCreateChildElement($element, newValue));
        this._updateOrCreateChildElement($element, $attrs.miGlyphicon);
    }
}

export function GlyphiconDirectiveFactory() {
    'ngInject';
    return new GlyphiconDirective();
};

GlyphiconDirectiveFactory.__name__ = directiveName;