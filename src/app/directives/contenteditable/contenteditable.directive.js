'use strict';

const directiveName = 'contenteditable';

export class ContentEditableDirective {
    constructor($window, $document, $timeout) {
        this.$window = $window;
        this.$document = $document;
        this.$timeout = $timeout;

        this.restrict = 'A';
        this.require = '?ngModel';
        this.caretAtEndModeAttrName = directiveName + "CaretAtEndMode"
    }

    link($scope, $element, $attrs, ngModel) {
        if (!ngModel) {
            return;
        }

        // model -> view
        var oldRender = ngModel.$render
        ngModel.$render = () => {
            if (oldRender) {
                oldRender();
            }
            this._updateView($element, $attrs, ngModel);
        }

        // view -> model
        let updateModel = () => this._updateModel($element, $attrs, ngModel);

        $element.on('blur keyup change', () => {
            $scope.$evalAsync(updateModel);
        });

        updateModel();
    }

    _updateView($element, $attrs, ngModel) {
        let text = ngModel.$viewValue || '';
        $element.text(text);

        if ($attrs.moveCaretToEndOnChange === "true") {
            this.$timeout(() => {
                this._placeCaretAtEnd($element, text);
            });
        }
    }

    _updateModel($element, $attrs, ngModel) {
        let text = $element.text();
        ngModel.$setViewValue(text);

        // if (text === '') {
        //     // the cursor disappears if the contents is empty so we need to refocus
        //     this.$timeout(() => {
        //         $element[0].blur();
        //         $element[0].focus();
        //     })
        // }       
    }

    _placeCaretAtEnd($element, text) {
        let element = $element[0];
        let selection = this.$window.getSelection();

        let range = this.$document[0].createRange();
        if (element.childNodes.length > 0) {
            let childNode = element.childNodes[0];
            range.setStart(childNode, text.length);
            range.collapse(true);
        }

        selection.removeAllRanges();
        selection.addRange(range);
        element.focus();
    }
}

export function ContentEditableDirectiveFactory($window, $document, $timeout) {
    'ngInject';
    return new ContentEditableDirective($window, $document, $timeout);
};

ContentEditableDirectiveFactory.__name__ = directiveName;