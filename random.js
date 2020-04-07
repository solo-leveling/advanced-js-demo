function squ(n) {
    return n * n;
}
setTimeout(() => {
    console.log("callback")
}, 0);

console.log(squ(2))