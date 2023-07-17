function hi() {
    return "hi"
}

function receivesAFunction(hi) {
    hi();
    return hi();
}

function returnsANamedFunction() {
    return (function hi() {
        return "hi"
    });
}

function returnsAnAnonymousFunction() {
    return (() => "hi")
}