'use strict';

import angular from 'angular';
import Registrater from 'registrater';

import {
    TodayComponent,
    TodaySectionComponent,
    OverdueSectionComponent,
    DoneSectionComponent,
    TodayService
} from '.';

const ngModule = angular.module('makeItApp.components.views.today', []);

new Registrater(ngModule)
    .registerComponents([
        TodayComponent,
        TodaySectionComponent,
        OverdueSectionComponent,
        DoneSectionComponent
    ])
    .registerServices([TodayService]);

export default ngModule.name;