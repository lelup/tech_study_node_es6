/**
 * Created by hoangnd on 8/22/17.
 */
var Promise = require('promise'); //npm install --save promise
var readFile = Promise.denodeify(require('fs').readFile); // denodeify : biến readFile thành hàm viết theo kiểu promise

module.exports = {
    //Example of Promise
    buyAnIphone: (iphoneName) => { // value là 1 arrow funtction
        return new Promise((fulfill, reject) => {
            //"fulfill" state = a promise representing a successful operation -> trạng thái thể hiện thực hiện công việc thành công 
            //"reject" state = a promise representing a failed operation.
            var isHappy = false;
            if (isHappy) {
                const phone = {
                    name: iphoneName,
                    color: 'black'
                };
                fulfill(phone); // fulfilled
            } else {
                const reason = new Error('I am not happy with this !');
                reject(reason);
            }
        });
    },
    readJsonFile: (jsonFileName) => {
        return readFile(jsonFileName, 'utf8').then((response) => {
            return JSON.parse(response);
        });
    }
};