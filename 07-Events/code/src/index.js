/**
 * Created by hoangnd on 7/27/17.
 * Events in Node js(ES6)
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
const EventEmitter = require('events');
class Customer extends EventEmitter {
    constructor(name, gender) {
        super(); // khởi tạo từ lớp cha
        this.name = name;
        this.gender = gender;
    }
};
const mrJohn = new Customer("John", "male"); // khời tạo object từ class Customer
const msMary = new Customer("Mary", "female");
const callbackFunction = (foods, customer) => {
    for (let index in foods) {
        console.log(`${customer.name} call ${foods[index]}`);
    }
};
mrJohn.on('eventCallFoods', callbackFunction);
// khai báo, đăng kí sự kiện
msMary.on('eventCallFoods', callbackFunction);
console.log("Do something...");
console.log("Do task 1");

mrJohn.emit("eventCallFoods", ["Pizza", "Salad"], mrJohn);
//khi khai báo emit thì eventCallFoods mới được gọi, bắt đầu tổ chức sự kiện
console.log("Do task 2");
console.log("Do something else...");
msMary.emit('eventCallFoods', ["Coke", "Sushi"], msMary);