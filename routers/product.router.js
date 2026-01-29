const productRouter = require('express').Router();
const  ApiResponse  = require('../utils/Apiresponse');
const firstMiddleware = require('../middlewares/firstMiddleware');
productRouter.use(firstMiddleware)
const { newproduct } = require('../controllers/product.controller');
productRouter.get('/product-list',(req, res) => {    
    res.json(new ApiResponse(200,true, "Product list fetched successfully1",[{
        id:1,
        name:"Sample Product",
        price:99.99
    }]));
});


productRouter.post('/add-product',newproduct);
module.exports = productRouter;    