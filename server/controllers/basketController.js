const { Basket } = require('../models/models');
const ApiError = require('../error/ApiError');

let basket; // создаем корзину, если она еще не существует


class basketController {
  async create(req, res, next) {
    try {
      if (!basket) {
        basket = await Basket.create();
      }

      return res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    const basket = await Basket.findAll();

    if (basket.length === 0) {
      await this.create();
    }

    return res.json(basket);
  }
};

module.exports = new basketController();
