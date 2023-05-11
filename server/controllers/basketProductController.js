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
    try {
      const basketProduct = await BasketProduct.findAndCountAll(
        { where: { basketId: 1 } }
      );
      return res.json(basketProduct);

    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
};

module.exports = new basketProductController();
