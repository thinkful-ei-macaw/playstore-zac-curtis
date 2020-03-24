const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const playstore = require('./playstore.js');
const app = express();
app.use(cors());

app.use(morgan('common')); // let's see what 'common' format looks like

app.get('/playstore', (req, res) => {
// ALL OUR CODE HERE
res
    .json(playstore)
});

app.listen(8000, () => {
console.log('Server started on PORT 8000');
});