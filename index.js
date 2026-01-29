const express = require('express');
const app=express();
//const connectDB = require('./db/connection');
//connectDB();
const productRouter = require('./routers/product.router');
const router = require('./routers/user.router');
app.use('/api/users', router);
app.use('/api/products', productRouter);
const port = process.env.port ? process.env.port : 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});