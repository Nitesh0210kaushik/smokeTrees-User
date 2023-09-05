const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();

require('./db/Config');
require('./models/User')
require('./models/Address')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', userRoutes);

const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});