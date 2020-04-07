function download() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Download Completed")
            resolve();
        }, 3000);
    });
    return promise;
}

// function start() {
//     download().then(() => {
//         console.log("Hey...")
//     });

// }
async function start() {
    try {
        await download();
        console.log("Heyy")
    } catch (err) {
        console.log(err)
    }
}


start();
// console.log("hi")