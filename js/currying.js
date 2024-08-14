// Currying is a method of breaking a function of n arguments, into many functions of one or more aguments.

function multiply(a, b, c){
    return a * b *c;
}

function currying(fun){
    return function (a){
        return function (b,c){
            return fun(a,b,c);
        }
    }
}

console.log(multiply(2,3,4)); // will produce 24

const curryingFunction = currying(multiply);

console.log(curryingFunction(2)(3,4));

