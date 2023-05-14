const { Sequelize } = require('sequelize');

const { Product, BasketProduct, Basket } = require('../models/models');
const ApiError = require('../error/ApiError');


class basketProductController {
  async create(req, res) {
    try {
      let { productId } = req.body;

      const basketProduct = await BasketProduct.create(
        { basketId: 1, productId }
      );

      return res.json(basketProduct);

    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const basketProduct = await Basket.findAndCountAll({
        include: Product,
        order: [['id']]
      });

      return res.json(basketProduct);

    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}


module.exports = new basketProductController();
