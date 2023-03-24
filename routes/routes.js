// import express
const bodyParser = require("body-parser");
const express = require("express");

// init express router
const router = express.Router();
// import function from controller
const {showProducts, showProductById, insertProduct, updateProduct, deleteProduct, showUsers, showUserById, deleteUser, createUser, updateUserData, userLogin} = require("../controllers/index");
  
  
router.get('^/$|/raifuru', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})

// Get All Product
router.get('/products', showProducts);
  
// Get Single Product
router.get('/products/:id', bodyParser.json(), showProductById);
  
// Create New Product
router.post('/products', bodyParser.json(), insertProduct);
  
// Update Product
router.put('/products/:id', bodyParser.json(), updateProduct);
  
// Delete Product
router.delete('/products/:id', deleteProduct);



//get ALL users
router.get('/users', showUsers);

//get user by ID
router.get('/users/:id', bodyParser.json(), showUserById)

//delete user by id
router.delete('/users/:id', bodyParser.json(), deleteUser)

//register new user
router.post('/register', bodyParser.json(), createUser)

//update user information
router.put('/users/:id', bodyParser.json(), updateUserData)

//user login
router.post('/login', bodyParser.json(), userLogin)
// export default router
module.exports = router;

