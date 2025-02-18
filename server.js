const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});