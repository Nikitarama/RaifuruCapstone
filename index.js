const express = require('express');

const path = require('path');

const cors = require('cors');

const db = require('./config/index');

const bodyParser = require('body-parser');

const port = parseInt(process.env.port) || 4000;

const app = express();

const route = express.Router();

const {errorHandling} = require('./middleware/ErrorHandling');

const {message} = require('./middleware/message');

app.use( 
    route,
    cors({
        origin: ['http://127.0.0.1:8080', 
        'http://localhost:8080'],
        credentials: true
    }),
    express.json,
    bodyParser.urlencoded( {extended: false} )
)

route.get('^/$|/raifuru', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})

route.get('/raifuru', (req, res)=>{
    const strQry =
    `
    SELECT prodID, prodName, origin, yearModel, typeGun, price, img, roundCapacity, caliber
    FROM Products;
    `;

    db.query(strQry, (err, data)=>{
        if(err) throw err;
        res.status(200).json( {result: data} );
    })
});

route.delete('/', (req, res) => {
    console.log(req.params);
    return res.json({
        message: 'DELETE'
    }) 
});

route.put('user/:id', bodyParser.json(), (req, res) => {
    let data = req.body;
    const strQry =
    `
    update Users
    set ?
    where userID = ?;
    `;
db.query(strQry, [data, req.params.id],
    (err)=>{
        if(err) throw err;
        res.status(200).json( {msg:
        "a row was affected"});
    })
});

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
});