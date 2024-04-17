function myDebounce (fn, time) {
    let task = null;

    return function () {
        clearTimeout(task);
        task = setTimeout(() => {
            fn.apply(this,arguments);
        }, time);
    }
}

function myThrottle (fn, time) {
    let taskRuninig = false;

    return function () {
        if (taskRuninig) {
            return;
        }

        taskRuninig = true;
        setTimeout(() => {
            fn.apply(this, arguments);
            taskRuninig = false;
        }, time);
    }
}