const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, './../prod')));
app.listen(3000, () => console.log('express app listening on port 3000!'));
