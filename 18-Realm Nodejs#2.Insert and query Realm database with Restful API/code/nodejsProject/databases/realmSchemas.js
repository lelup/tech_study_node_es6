/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
Database schemas of Realm
*/
const Realm = require('realm')
const USER_SCHEMA = "User"
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
    schema: [UserSchema],
    schemaVersion: 0, //optional    
}
//functions for UserSchema
const insertNewUser = newUser => new Promise((resolve, reject) => {        
    Realm.open(databaseOptions).then(realm => {
        //Check if existing user    
        let filteredUsers = realm.objects(USER_SCHEMA)
                                .filtered(`name='${newUser.name.trim()}' AND email='${newUser.email.trim()}'`)
                                //kiểm tra xem name và email truyền vào có trùng với name, email sẵn có không?
                                // trả về mảng filteredUsers
        if (filteredUsers.length > 0) {
            reject("User with the same name and email exists !")            
        }
        realm.write(() => {
            newUser.id = Math.floor(Date.now()) // khóa chính ko tự động tăng, lấy timestamp của thời điểm hiện tại
            realm.create(USER_SCHEMA, newUser)
            // realm.create: tạo 1 object trong database 
            resolve(newUser)
        })
    }).catch((error) => reject(error))
})

const findAllUsers = () => new Promise((resolve, reject) => {
    // lấy ra tất cả user, ko nên viết api
    Realm.open(databaseOptions).then(realm => {
        let allUsers = realm.objects(USER_SCHEMA)
        resolve(allUsers)
    }).catch((error) => {
        reject(error)
    })
})

//For testing purpose : gọi nội bộ
findAllUsers().then((allUsers)=> {
    console.log(`allUsers = ${JSON.stringify(allUsers)}`) // chạy log ra all user
}).catch((error) => {
    console.log(`Cannot get all users. Error: ${error}`)
})

module.exports =  {    
    insertNewUser,      
}