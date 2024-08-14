a = 10;
console.log(a);

var a; // can be hoisted

b();  // Will run fine
function b(){
    console.log('function b');
}

d = () => {
    console.log('Printing D function');  // Will run perfectrly fine
}
d();
var d;

e(); // Will throw error, that e is not a function because initilization is not hoisted
e = () => {
    console.log('Printing E function');
}
var e;

c = 5; // Will give error, Access before initilization
console.log(c);
let c;  // let, const cannot be hoisted

