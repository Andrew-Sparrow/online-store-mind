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
      const device = await Product.create({ title, price, img: fileName });

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  };

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    let offset = page * limit - limit;

    let products = await Product.findAndCountAll({ where: { typeId, brandId }, limit, offset });

    return res.json(products);
  };

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Product.findOne(
      {
        where: { id }
      },
    )
    return res.json(device);
  }
};

module.exports = new productController();
