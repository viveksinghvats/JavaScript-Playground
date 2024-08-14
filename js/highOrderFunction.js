// High Order Function: Ability to take function as a parameter, or return a function in response.
// First class citizen: Ability of function being passed or return as a parameter.
let c = ()=> {
    console.log("Executing c");
}

function high1(fun){ // taking function as a parameter.  
fun();  
}

high1(c);

function high2(){
    return function(){
        console.log('Exceuting d');
    }
}

let d = high2();
d();