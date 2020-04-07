var x = function() {
    console.log('Hello');
}
var y = () => {
    console.log('arrow function');
}

function download(fn) {
    console.log('Downloading...');
    fn();
}
download(x);
download(function() {
    console.log('hi');
})
download(() => {
    console.log('Mingalarbr')
})
download(y);