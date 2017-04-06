'use strict';

export function inherits(constructor, superConstructor) {
    let func = typeof Object.create === 'function'
        ? standardNodeJsUtilInherits
        : oldBrowsersInherits;
    return func(constructor, superConstructor);
}

function standardNodeJsUtilInherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    })
};

function oldBrowsersInherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function() {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
};
