async function func1() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log("Function 1");
            }, 1000);
            resolve(1);
        } catch (error) {
            reject(error);
        }
    });
}

async function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Function 2");
            resolve(1);
        }, 1000);
    });
}

async function func3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Function 3");
            resolve(1);
        }, 1000);
    });
}

async function run() {
    const allPromise = await Promise.all([func1(), func2(), func3()]);

    return allPromise[0];
}

const value1 = run();

console.log('Last line of file');

async function func4(value1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Function 4" + value1.data);
            console.log(JSON.stringify(value1));
            resolve(1);
        }, 2000);
    });
}

func4(value1);
func1().then(data => {
    console.log(data);
})