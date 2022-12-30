// ! include core modules
const path = require('path');

// ! include node modules
const express = require('express');

// ! include npm modules
const morgan = require('morgan');

// ! including router modules

const users = require('./routes/users');

// ! initializing the express app  and assigning the port variable
port = process.env.PORT || 9000;
const app = express();

// ! setting the view engine ###############
app.set('view engine', 'ejs');

// ! static files ##################################
app.use(express.static(path.join(__dirname, 'public')));

// ! meddlewares ###############################

app.use(morgan('dev'));
app.use('/home', users);

// ! starting the server ;
app.listen(port, () => console.log(`app is starting on port ${port}`));
