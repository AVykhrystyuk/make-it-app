'use strict';

import angular from 'angular';

const directiveSelector = 'miGlyphicon';

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

        let iElements = $element.children('i .glyphicon');
        if (iElements.length) {
            let oldIconId = iElements.attr('icon-id');
            iElements
                .removeClass(this._getIconClass(oldIconId))
                .attr('icon-id', iconId)
                .addClass(this._getIconClass(iconId));
            return;
        }

        $element.addClass('glyphiconized');

        let iElement = angular.element('<i>')
            .attr('icon-id', iconId)
            .addClass('glyphicon')
            .addClass(this._getIconClass(iconId))
            .attr('aria-hidden', true);

        $element.prepend(iElement);
    }

    link($scope, $element, $attrs) {
        $attrs.$observe(directiveSelector, newValue => this._updateOrCreateChildElement($element, newValue));
        this._updateOrCreateChildElement($element, $attrs.miGlyphicon);
    }
}

export function GlyphiconDirectiveFactory() {
    'ngInject';
    return new GlyphiconDirective();
};

GlyphiconDirectiveFactory.__selector__ = directiveSelector;