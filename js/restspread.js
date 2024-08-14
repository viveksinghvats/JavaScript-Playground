// Rest Operator:

function f1(...args){
    let sum = 0;
    for(let i = 0; i < args.length; i++){
      sum += args[i];
    }
    console.log(sum);
}

f1(1,2,3,4,5,6,7,8,9,10); // will print 55

function f2(firstNo, ...restNo){ // always pass the rest operator at last
    let mul = firstNo;
    for(let i = 0; i < restNo.length; i++){
        mul *= restNo[i];
    }
    console.log(mul);
}

f2(2,3,4); // will print 24


// Spread opertor:
const arr = [1,2,3,4];
console.log(...arr); // will print 1,2,3,4
console.log(arr);

const obj1 = {a: 5, b: 7};
const obj2 = {c: 6, b: 6}; // this b will override the previous value and will print b = 6
const obj3 = {...obj1, ...obj2};
const obj4 = {...obj2, ...obj1};

console.log(obj3);
console.log(obj4); // here b = 7