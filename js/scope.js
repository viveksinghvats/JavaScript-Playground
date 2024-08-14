let value = "vivek";

var some = "Yashi";

function scopeCheck() {
    console.log(this.value + " Loves " + this.some); // this.value is undefined because value is let, so not defined in globalScope
    console.log(value + " loves " + some);
}

scopeCheck();

scopeCheck.bind({ value: "Vivek", some: "Yashi" })();

// var, let 
// var and let both are function scoped.
// var exist in global scope while let is not

var v1 = 5; // This works only for global scope not for nested inside the scope, because there it will start storing the used variables in closures
let v2 = 6;
function f1() {
    var v3 = 7;
    function f2() {
        console.log(v1);
        console.log(v2); // both will print because of function scope

        console.log(this.v1); // will print because it exist in global scope
        console.log(this.v2); // will not print because not in global scope

        console.log(v3); // will print because of closure and function scope
        console.log(this.v3); // will not print because var only works for global object only, here it would store v3 in closure, if being used
    }
    f2();
}
f1();

// let only exists in block, while var can exist outside also

for(let i = 0; i < 5; i++){

}
console.log(i); // will not print because let has only block access

for(var i = 0; i < 5; i++){ 

}

console.log(i); // will print because var has access outside the block also