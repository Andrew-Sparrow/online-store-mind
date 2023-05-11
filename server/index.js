require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');
const { Basket } = require('./models/models');


const PORT = process.env.PORT || 5030;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler); // Error handler, last Middleware


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(process.env.PORT, () => console.log(`Server started ${ PORT }!`));

    let basket; // создаем корзину, если еще не существует

    if (!basket) {
      basket = await Basket.create();
    }
  } catch (error) {
    console.log(error.message);
  }
};

start();
