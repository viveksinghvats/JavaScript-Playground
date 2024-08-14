function outerFunction(){
    let count = 0;
    function outerFunctionAnotherFunction(){
        let b = 1;
    }
    outerFunctionAnotherFunction();
    function innerFunction(){
        count++;
        console.log(count);
    }

    return innerFunction;
}

let counter = outerFunction();  
/* 
* made an entry in the script object of global scope, inside script we have counter holding the value as function innerFunction(){} 
* which has closure object in it's scopes, which hold the count variable,
* even though after the counter function will be executed we will still have the counter entry in the script
* this work exactly same as it is, even for var variable.
*/
counter();
counter();

function nextFunction(){
    console.log("next function");
}

nextFunction();