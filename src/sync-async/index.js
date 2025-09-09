
// Synchronous

// console.log("1");
// console.log("2");
// console.log("3");

// Asynchronous

console.log("1");

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2 with promise");
            resolve("Done");
        }, 2000);
    });
};

myPromise().then((res) => console.log(res));
