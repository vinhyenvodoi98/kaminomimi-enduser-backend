const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const multer = require('multer');
const cors = require('cors');
const port = process.env.PORT || 80;
const upload = multer();

// import routes
const mentions = require('./routers/mentions.routes');
const auth = require('./routers/auth.routes');
const user = require('./routers/user.routes');
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(logger('dev'));
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());

// database
const db = require('./models');
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
// routes
app.get('/', function (req, res) {
  res.send('user Ok');
});
app.use('/mention', mentions);
app.use('/user', user);
app.use('/auth', auth);

// launch ======================================================================
app.listen(port);
console.log(`server working on ${port}`);
