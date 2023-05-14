const uuid = require('uuid');
const path = require('path');
const { Product } = require('../models/models');
const ApiError = require('../error/ApiError');


class productController {
  async create(req, res, next) {
    try {
      let { title, price } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const product = await Product.create({ title, price, img: fileName });

      return res.json(product);

    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  };

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne(
      {
        where: { id }
      },
    )
    return res.json(product);
  }
};

module.exports = new productController();
