// call, apply, bind

var name = 'Yashi';

function normalFunction(){
    /*
    * In normal function this will be the object of function from where it invoked, 
    * in this case it's global object(i.e const, or let variable cannot be accessed from here, because they exist in script object, not in global object)
    */
    console.log(this.name + " is awesome");
}
normalFunction(); 


// Call: 
function b(){
    /*
    * Here this keyword will be the object that we are passing in call method not global object
    */
    console.log(this.name + " is awesome"); 
}
var obj = { name: 'Vivek'};
b.call(obj);

// call can also take parameters

function c(message, newMessage){
    console.log(this.name + " is " + message + " and " + newMessage);
}
let obj2 = {
    name: "Vivek"
}
c.call(obj2, "Sad", "Smoking");

//Apply: only difference between call and bind is that it took parameter in an array
c.apply(obj2, ["Happy", "Excited"]);


// Bind: Bind return a function where this keyword is limited to the object that we pass
// Basically the difference is that bind returns the function, while call executes also.
function displayBikeDetails(brand){
    console.log(this.name + " Bike is " + brand);
}
displayBikeDetails.bind({name: 'Vivek'}, "Gixxer")();
