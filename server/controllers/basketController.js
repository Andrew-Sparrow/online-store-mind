const { Basket } = require('../models/models');
const ApiError = require('../error/ApiError');



class basketController {
  async create(req, res, next) {
    try {
      let basket = await Basket.findOrCreate({ where: { id: 1 } });

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
