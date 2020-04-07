// function download() {
//     setTimeout(() => {
//         console.log("Download Completed.")
//     }, 3000);
// }
// download();
// console.log("Continue other tasks.........")

function noti() {
    console.log('Complete')
}

function download() {
    console.log('Download')
    noti();
    console.log('All done.')
}

function start() {
    console.log('Start')
    download();
}

start();