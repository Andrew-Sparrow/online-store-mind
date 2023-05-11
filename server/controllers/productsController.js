const { Product } = require('../models/models');


class productsController {
  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;

    let products = await Product.findAndCountAll({ limit, offset });

    return res.json(products);
  };
};

module.exports = new productsController();
