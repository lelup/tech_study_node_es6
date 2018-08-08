/**
 * Created by hoangnd on 7/28/17.
 */
/**
//"area" is a function
exports.area = (width, height) => width * height;
//"circumference" is a function
exports.circumference = (width, height) => 2 * (width + height);
 */

/**
 module.exports = {
    area: (width, height) => width * height,
    circumference: (width, height) => 2 * (width + height)
}
 */
module.exports = {
    //"area" is a function : có input và hàm thực thi
    area: (width, height) => { //sử dụng {} khi phần thực thi nhiều hơn 1 dòng
        return width * height;
    },
    circumference: (width, height) => {
        console.log("Calculating...");
        return 2 * (width + height);
    },
    //currentDateTime is a property, not a function
    currentDateTime: Date(), // public một thuộc tính ra ngoài module
    directoryName: __dirname, // tên thư mục hiện tại chứa file
    fileName: __filename //tên thư mục hiện tại chứa file kèm theo tên
}
