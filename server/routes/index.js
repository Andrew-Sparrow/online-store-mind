const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const productsRouter = require('./productsRouter');
const basketRouter = require('./basketRouter');


router.use('/product', productRouter);
router.use('/products', productsRouter);
router.use('/basket', basketRouter);

module.exports = router;
