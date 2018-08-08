/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Database schemas of Realm
*/
const Realm = require('realm')
const USER_SCHEMA = "User" // định nghĩa tên bảng
const Promise = require('promise')

const UserSchema = {
    name: USER_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        name: { type: 'string', indexed: true },
        email: 'string',                
    }
}
const databaseOptions = {
    path: 'RealmInNodeJS.realm',
    schema: [UserSchema], // tên bảng
    schemaVersion: 0, //optional    
}
//functions for UserSchema
const insertNewUser = newUser => new Promise((resolve, reject) => {        
    //resolve : success
    //reject: fail
})
module.exports =  {    
    insertNewUser,   
}
