var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
    response.render('index', {title: 'My tutorial videos'});
});

router.get('/list_all_foods', (request, response, next) => {
    response.end("GET requested => list_all_foods");
    //get: đọc bản ghi trong cơ sở dữ liệu
});

router.post('/insert_new_food', (request, response, next) => {
    response.end("POST requested => insert_new_food");
    //post: thêm một bản ghi trong cơ sở dữ liệu
});

router.put('/update_a_food', (request, response, next) => {
    response.end("PUT requested => update_a_food");
    //put: cập nhật, update bản ghi trong cơ sở dữ liệu
});

router.delete('/delete_a_food', (request, response, next) => {
    response.end("DELETE requested => delete_a_food");
     //delete: muốn xóa bản ghi trong cơ sở dữ liệu
});

module.exports = router;
