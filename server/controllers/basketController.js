const { Basket } = require('../models/models');
const ApiError = require('../error/ApiError');


class basketController {
  async create(req, res) {
    const basket = await Basket.create();

    return res.json(basket);
  }

  async getAll(req, res) {
    const basket = await Basket.findAll();
    return res.json(basket);
  }
};

module.exports = new basketController();
