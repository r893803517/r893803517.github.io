Function.prototype.myCall = function(context, ...args) {
    if (typeof context === 'undefined' || typeof context === 'null') {
        context = window;
    }

    let fn = Symbol();
    context[fn] = this;

    let result = context[fn](...args);
    delete context[fn];

    return result;
}

Function.prototype.myApply = function(context, argsArr) {
    if (typeof context === 'undefined' || typeof context === 'null') {
        context = window;
    }

    let fn = Symbol();
    context[fn] = this;

    let result = context[fn](...argsArr);
    delete context[fn];

    return result;
}

Function.prototype.myBind = function(context) {
    let fn = this;
    const args = Array.from(arguments).slice(1);

    let retFun = function () {
        const newArgs = args.concat(...arguments);

        if (this instanceof retFun) {
            fn.apply(this, newArgs);
        } else {
            fn.apply(context, newArgs)
        }
    }

    retFun.prototype = Object.create(fn.prototype);
    return newFunc;
}