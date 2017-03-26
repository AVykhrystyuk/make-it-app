'use strict';

import angular from 'angular';

import routes from './app.routes.js';
import {
    AppComponent
} from './app.component.js';
import {
    NavigationInlineComponent,
    GlyphiconizedIconComponent
} from './common';
import {
    QuickTaskAddComponent,
    SearchInlineComponent
} from './components';


let components = [
    AppComponent,
    NavigationInlineComponent, GlyphiconizedIconComponent,
    QuickTaskAddComponent, SearchInlineComponent
];

let registrations = [routes];

const app = angular.module('makeItApp', []);

components.forEach(c => app.component(c.__selector__, c));

registrations.forEach(r => r(app));