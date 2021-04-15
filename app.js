var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chipsRouter = require('./routes/chips');
var starsRouter = require('./routes/stars');
var slotRouter = require('./routes/slot');
var resourceRouter = require('./routes/resource');
var chips = require('./models/chips');

const connectionString = "mongodb+srv://Narendra:test@123@cluster0.irwqv.mongodb.net/chips?retryWrites=true&w=majority";
mongoose = require('mongoose');
mongoose.connect(connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});


// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await chips.deleteMany();
  let instance1 = new chips({chipsName: "lays", Flavour: 'BBQ', price: 2.59  });
  let instance2 = new chips({chipsName: "kettel-cooked", Flavour: 'Tomato', price: 1.39  });
  let instance3 = new chips({chipsName: "spicyLays", Flavour: 'spicy', price: 3.99 });
  instance1.save(function (err, doc) {
      if (err) return console.error(err);
      console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
});
instance3.save(function (err, doc) {
  if (err) return console.error(err);
  console.log("Third object saved")
});
}
let reseed = true;
if (reseed) {
  recreateDB();
}



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chips', chipsRouter);
app.use('/stars', starsRouter);
app.use('/slot', slotRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.messprice = err.messprice;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error pprice
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
