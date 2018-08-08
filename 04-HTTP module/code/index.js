/**
 * Created by hoangnd on 7/27/17.
 * HTTP module
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
let http = require('http');
const port = 3001;
const server = http.createServer((request, response) => {
    // response.write("This is a response for a request !");
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5' //Trailer phần cuối
    });
    const ipAddress = request.socket.remoteAddress; //link url client gửi lên (địa chỉ IP)
    response.write(`Your IP address is ${ipAddress} \r\n`); ////write a response to the client
    response.write(`Request's url : ${request.url}`); // cho biết request gửi từ client có đường link như thế nào
    response.write(`Detail request's url : ${require('url').parse(request.url, true)}`);
    debugger;
    response.addTrailers({'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667'}); // check mã hai phía gửi lên đã khớp chưa ? token
    response.end(); // cần response.end để kết thúc quá trình server trả về
}).listen(port); //
console.log(`Server is running on port: ${port}.`);

// http: phương thức quan trọng cho phép tạo ra server, cho phép các request từ phía client gửi lên thông qua các cổng
// sau dấu ? : là các tham số khi gửi bằng phuong thức GET, (bắt đầu tham số)
// %20 : là dấu cách 
// & : phân biệt các thông số
// require('url'): thư viện phục vụ cho việc bóc tách url
// parse: phân tích cái request url thành 1 object

//JSON.stringify() : chuyển tải thông tin object về dạng string
//response.writeHead: ghi vào head mã
// 200: successful: thành công
// 400 : bad request
