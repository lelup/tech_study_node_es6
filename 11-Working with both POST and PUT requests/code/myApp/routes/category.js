/**
 * Created by hoangnd on 8/10/17.
 */
var router = global.router;
let Category = require('../models/CategoryModel');

router.post('/insert_new_category', (request, response, next) => {
    const criteria = {
        name: new RegExp('^' + request.body.name.trim() + '$', "i")
    };
    Category.find(criteria).limit(1).exec((err, categories) => {
        // kiểm tra xem category đó đã tồn tại hay chưa
        if (err) {
            response.json({
                result: "failed",
                data: [],
                messege: `Error is : ${err}`
            })
        } else {
            //If it exist, donot allow to insert !
            if (categories.length > 0) {
                response.json({
                    result: "failed",
                    data: [],
                    message: 'Can not insert because the name exists'
                })
            } else {
                //Can insert
                const newCategory = new Category({
                    name: request.body.name,
                    description: request.body.description
                });
                newCategory.save((err, addedCategory) => {
                    if (err) {
                        response.json({
                            result: "failed",
                            data: {},
                            messege: `Error is : ${err}`
                        });
                    } else {
                        response.json({
                            result: "ok",
                            data: addedCategory,
                            messege: "Insert new category successfully"
                        });
                    }
                });
            }
        }
    });
});
module.exports = router;

// db.category.find({}).pretty()