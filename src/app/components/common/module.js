'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    SearchInlineComponent,
    QuickTaskAddComponent,
    OverdueSectionComponent,
    DoneSectionComponent
} from '.';

const ngModule = angular.module('makeItApp.components.common', []);

new Registrater(ngModule)
    .registerComponents([QuickTaskAddComponent, SearchInlineComponent, OverdueSectionComponent, DoneSectionComponent]);

export default ngModule.name;