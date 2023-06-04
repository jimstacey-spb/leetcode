var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "one");
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "two");
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "three");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 400, "four");
});
// var p5 = new Promise((resolve, reject) => {
// // Этот промис прервёт Promise.all
//     reject("reject");
// });

Promise.pall = function (promisesArr) {
    return new Promise((resolve, reject) => {
        const success = [];
        promisesArr.forEach((prom, i) => {
            prom.then((result) => {
                success[i] = result;
                if (success.length === promisesArr.length) {
                    resolve(success);
                }
            }).catch((reason) => reject(reason));
        })
    })

}

Promise.pall([p1, p2, p3, p4]).then(value => {
    console.log(value);
}, reason => {
    console.log(reason)
});

Promise.all([p1, p2, p3, p4]).then(value => {
    console.log(value);
}, reason => {
    console.log(reason)
});