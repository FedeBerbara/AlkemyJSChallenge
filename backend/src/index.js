//* Modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoDb = require('./database/database');
//const apiRoutes = require('./router');

//* Initializations
const app = express();
mongoDb();
require('dotenv/config');

//* Settings
const port = process.env.PORT || 5000;

//* Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

//* Routes
//apiRoutes(app);

//* Starting the server 
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});