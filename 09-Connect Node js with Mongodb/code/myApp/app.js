var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
//Connect DB:
var mongoose = require('mongoose');
let options = {
  db: {native_parser: true},
  server: {poolSize: 5},
  user: 'hoangnd',
  pass: 'hoangnd'
};
// Use native Promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tutorialMongoDB', options).then(
  //sau khi thực hiện xong connect sẽ nhảy đến then
     () => {
      console.log("connect DB successfully");
      // hàm call back, viết theo es6
    },
    err => {
      console.log('Connection failed. Error: ${err}');
    }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// mkdir database //directory name
//mongod --port 27017 --db  path database //directory name  
// mongo --port 27017
//user tutorialMongoDB -> switch to db tutorialMongoDB  

/*
 db.createUser ({
     user: "hoangnd",
     pwd: "hoangnd",
     role: ["readeWrite", "admin", "dbOwner"]
 })
 */

 // connect with authen
 // mongo --port 27017 -u "hoangnd" -p "hoangnd" --authenticationDatabase "tutorialMongoDB"
 // user tutorialMongoDB -> switch to db tutorialMongoDB 
 // show collection, mỗi bảng gọi là 1 collection
 //db.food.find() -> list all các phần tử, like select *