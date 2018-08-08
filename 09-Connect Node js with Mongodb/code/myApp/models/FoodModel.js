/**
 * Created by hoangnd on 8/7/17.
 */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // thư viện mongoose 4.10.2

// tạo cấu trúc bảng FoodSchema
var FoodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    foodDescription: {
        type: String,
        default: ""
    },
    created_date: {
        type: Date,
        default: Date.now // xem bản ghi tạo ngày nào
    },
    status: {
        type: [{
            type: String,
            enum: ['available', 'unavailable']
        }],
        default: ['available']
    }
});
// a setter: khi trường name dược gán già trị, thì sẽ làm gì đó sau mới insert vào CSDL
FoodSchema.path('name').set( (inputString) => {
    return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model('Food', FoodSchema);
