const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const basketRouter = require('./basketRouter');


router.use('/product', productRouter);
router.use('/basket', basketRouter);

module.exports = router;
