const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const productsRouter = require('./productsRouter');
const basketRouter = require('./basketRouter');
const basketProductRouter = require('./basketProductRouter');


router.use('/product', productRouter);
router.use('/products', productsRouter);
router.use('/basket', basketRouter);
router.use('/basket-product', basketProductRouter);

module.exports = router;
