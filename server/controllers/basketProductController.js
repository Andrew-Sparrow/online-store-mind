const { BasketProduct } = require('../models/models');
const ApiError = require('../error/ApiError');


class basketProductController {
  async create(req, res) {

    try {
      const basketProduct = await BasketProduct.create(
        { basketId: 1, productId }
      );

      return res.json(basketProduct);

    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;

    try {
      const basketProduct = await Basket.findAndCountAll(
        { where: { basketId: 1 }, limit, offset }
      );
      return res.json(basketProduct);

    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
};

module.exports = new basketProductController();
