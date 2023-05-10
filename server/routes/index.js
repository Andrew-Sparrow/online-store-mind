const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');


router.use('/device', productRouter);

module.exports = router;
