// Generator function*

function* generate(){
    for(var i = 0; i < 3; i++){
        yield i;
    }
    return i;
}

const itr = generate();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());


