// Promise implementation

function multiplyUptoThreeElements(...elements) {

    return new Promise((resolve, reject) => {
        if (elements.length > 3) reject('Cannot accept more than 3 elements');
        let mul = 1;
        for (let i = 0; i < elements.length; i++) {
            mul *= elements[i];
        }

        resolve('Multiplication is ' + mul);
    });
}

multiplyUptoThreeElements(1, 2, 3).then((value) => {
    console.log(value);
}).catch((err) => {
    console.log(err);
});