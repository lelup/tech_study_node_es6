/**
 * Created by hoangnd on 7/27/17.
 * Node Server with Babel
 * sunlight4d@gmail.com - Nguyen Duc Hoang
 */
let http = require('http');
const port = 3001;
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(`Request's url : ${request.url}`);
    response.end();
}).listen(port);
console.log(`AA.Server is running on port: ${port}.`);
        
// babel: compiler của node js, dùng biên dịch các ứng dụng - xem kết quả mà không cần chạy lại code
// npm install --save-dev babel-cli : --save-dev cài lưu chỉ trong quá trình phát triển dự án
//cli: command line interface   
// npm install --save-dev babel-preset-es2015 babel-preset-stage-2 : 2 plugin giúp làm việc ecmascript 6

// npm start = node index.js khi setup thêm dòng start trong package.json
// npm install --save-dev nodemon
// nodemon : node monitor - theo dõi sự thay đổi của code, (thêm sửa dòng code)
// mv index.js src/ chuyển file index.js vào folder src

// "build": "babel src -d distribution" - xuất ra thư mục distribution
//  "serve": "node distribution/index.js" chạy index.js sau khi biên dịch
// npm run build
// npm run serve
