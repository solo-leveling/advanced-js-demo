var number = [12, 23, 34, 45, 56];
var temp;
number.forEach((e, i) => {
    temp += e;
    console.log(i + ":" + e)
});
console.log(temp)
var newNum = number.map((e, i) => {

    if (i == 30)
        return i;
    return "a";
    "output :: undefined"
})

var filter = number.filter((e, i) => {
    if (e > 30) return true;
    return false;
});

var student = [{ id: 1, name: 'su su', age: "18" }, { id: 2, name: 'su su1', age: "21" }, { id: 3, name: 'su su2', age: "22" }]
var newStu = student.filter(e => {
        if (e.age > 18) {
            return true;
        }
        return false;
    })
    // console.log(newStu);
    // console.log(newNum);
    // console.log(filter);