require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5500;

/*---------------------------*/
app.use(express.static('public'));

/*------------------------*/
app.get('/', (req, res) => {
  console.log('>> GET /');
  res.sendFile(`${__dirname}/index.html`);
});

/*-------------------------*/
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
