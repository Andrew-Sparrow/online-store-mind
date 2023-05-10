const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');


const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Working' });
// });


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