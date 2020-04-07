var numbers = [12, 23, 34, 45];
var newNum = numbers.slice(0, 3);
// for (var i = 0; i < numbers.length; i++) {
//     newNum.push(numbers[i]);
// }

newNum.push(88);
console.log(numbers);
console.log(newNum);

var isOk = true;
var isHappy = isOk;
isHappy = false;
console.log(isOk);

var obj = { id: 1, name: 'su su' }
var obj1 = Object.assign({}, obj);
obj1.name = "jone doe";
console.log(obj);
console.log(obj1.name);

var num = 123;
var num1 = num;
num1 = 234;
console.log(num);