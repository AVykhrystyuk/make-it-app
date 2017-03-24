'use strict';

import searchInline from './search-inline';
import quickTaskAdd from './quick-task-add';

let registrations = [
    searchInline,
    quickTaskAdd
];

export default function register(app) {
    registrations.forEach(r => r(app));
}