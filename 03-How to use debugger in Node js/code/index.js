/**
 * Created by hoangnd on 7/27/17.
 * How to use debugger in Node.js with ES6
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */

console.log('hello');
debugger;
var arithmeticMean = (numbers) => {
    var total = 0
    debugger;
    for (let number in numbers) {
        total = total + parseFloat(number);
        console.log(`total is : ${total}, number is : ${number}`)
    }
    console.log(`Result is : ${total / numbers.length} `)
}
arithmeticMean([1,2,3,4,5]);

// node inspect index.js, and 
// press c -> jump to debugger
// press n -> nhảy từng dòng một (next)
// repl: in được giá trị mong muốn ra
// list(5) -> in ra các (5)câu lệnh xung quanh
//sb(16) -> set break point - nhảy đến dòng 16
// Waiting for the debugger to disconnect -> chạy hết trương trình


        




