const express = require('express');
require('dotenv').config();
const sequelize = require('./db');

const PORT = process.env.PORT;
const app = express();


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(process.env.PORT, () => console.log(`Server started ${ PORT }!`));
  } catch (error) {
    console.log(error.message);
  }
};

start();