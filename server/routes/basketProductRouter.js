const Router = require('express');
const router = new Router();
const basketProductController = require('../controllers/basketProductController');


router.post('/', basketProductController.create);
router.get('/', basketProductController.getAll);

module.exports = router;
