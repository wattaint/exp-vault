const _ = require('lodash');
const express = require('express');

const app = express();

const PORT = _(process.env).get('PORT', 8080);

app.get('/', (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listened: ${PORT}`);
});
