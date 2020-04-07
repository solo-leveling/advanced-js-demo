function compare(num) {
    var promise = new Promise((resolve, reject) => {
        // var num = 5;
        if (num >= 5) {
            if (num == 5) {
                resolve(num + " equal 5")
            } else {
                resolve(num + " greater than 5")
            }
        } else {
            reject(num + " less than 5")
        }
    })
    return promise;
}
var num = Math.floor(Math.random() * 10);
compare(num).then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})