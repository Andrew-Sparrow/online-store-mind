const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.listen(process.env.PORT, () => console.log(`Server started ${ PORT }!`));
