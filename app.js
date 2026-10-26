const express = require('express');
const logger = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello from the middleware lab!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});