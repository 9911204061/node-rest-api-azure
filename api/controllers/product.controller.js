const ApiResponse = require("../utils/Apiresponse");
const User = require("../models/user.model");
const newproduct =async (req, res) => { 
    console.log(req.body);
// const { name, email,age } = req.body;
// let user = User.create({ name, email,age })
    res.json(new ApiResponse(201,true, "Product added successfully",{
        id:1,
        name:'Aaa',
        price:21.99
    }));
 }
module.exports = { newproduct }
