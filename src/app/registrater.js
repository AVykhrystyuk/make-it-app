'use strict';

export default class Registrater {
    constructor(ngModule) {
        this.ngModule = ngModule;
    }

    registerComponents(components) {
        components.forEach(c => this.registerComponent(c));
        return this;
    }

    registerDirectives(directives) {
        directives.forEach(d => this.registerDirective(d));
        return this;
    }

    registerServices(services) {
        services.forEach(s => this.registerService(s));
        return this;
    }

    registerComponent(component) {
        this.ngModule.component(component.__selector__, component);
        return this;
    }

    registerDirective(directive) {
        this.ngModule.directive(directive.__selector__, directive);
        return this;
    }

    registerService(service) {
        this.ngModule.service(service.__selector__, service);
        return this;
    }
}