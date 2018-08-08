/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Root file for nodejs's project
*/
const { app } = require('./express/expressApp') // trích xuất đối tượng app
const port = 3000
app.set('port', process.env.PORT || port)
app.listen(port, () => console.log(`Express app is listening on port ${port}`))

// yarn add realm: quản lý realm database
// express : quản lý các việc request POST, GET 
// promise : viết các hàm async
// body-parser: lấy các dữ liệu từ client, bóc tách dưới dạng key, value, json
// nodemon

// tạo thư mục database, express