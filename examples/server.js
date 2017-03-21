const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.engine('html', ejs.renderFile);
app.set('views', path.resolve(__dirname, 'public'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static(path.resolve(__dirname, './')));

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
