const sequelize = require('../db');
const { DataTypes } = require('sequelize');

// TODO Добавить талбицу с заказанными товарами

const Basket = sequelize.define(
  'basket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
})ж

const BasketProduct = sequelize.define(
  'basket_product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }
});

const Product = sequelize.define(
  'product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
},
    img: {
      type: DataTypes.STRING,
      allowNull: false
  }
});

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

module.exports = {
  Basket,
  BasketProduct,
  Product
};