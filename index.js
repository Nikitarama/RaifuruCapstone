const express = require('express');

const path = require('path');

const cors = require('cors');

const db = require('./config/index');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

require('dotenv').config();
const port = parseInt(process.env.PORT) || 4000;

const app = express();

const route = express.Router();

const routes = require('./routes/routes')

const {errorHandling} = require('./middleware/ErrorHandling');

const {message} = require('./middleware/message');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});



app.use(routes)

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
});