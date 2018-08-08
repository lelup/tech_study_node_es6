/**
 * Created by hoangnd on 8/2/17.
 */
const fs = require('fs');
module.exports = {
    createNewFile: (fileName) => {
        const fd = fs.openSync(fileName, 'w');//fd = file descriptor
    },
    saveJsonObjectToFile: (obj, fileName) => {
        const jsonString = JSON.stringify(obj);
        fs.writeFile(fileName, jsonString, 'utf-8', (err, data) => { // ghi jsonString vào fileName
            if (err) throw err; // bao gồm nhảy ra khỏi hàm
            console.log(`Saved to file ${fileName}`);
        });
    },
    readJsonObjectFromFile: (fileName) => {
        //Asynchronously reads the entire contents of a file
        fs.readFile(fileName, (err, data) => { // đọc không đồng bộ
            if (err) throw err;
            let jsonObject = JSON.parse(data); // sau khi đọc nội dung file dưới dạng text, lưu vào một biến jsonObject
            // console.log(`jsonObject.foods = ${JSON.stringify(jsonObject.foods)}`);
            console.log(`jsonObject.resultCode = ${JSON.stringify(jsonObject.resultCode)}`); // mã kết quả 200, 400
            console.log(`jsonObject.restaurantName = ${JSON.stringify(jsonObject.restaurantName)}`);
            console.log(`jsonObject.address = ${JSON.stringify(jsonObject.address)}`);
        });
    }
};

// fs: file systems -> giúp ghi đọc file bất kỳ
// đọc-ghi file json
