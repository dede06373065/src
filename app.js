require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const { connectToDB } = require('./utils/db');


const morganLog = process.env.NODE_ENV === 'production'? morgan('common'):morgan('dev');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(morganLog);
app.use(express.json());
app.use('/api',router);

connectToDB();

app.listen(PORT,() => {
    console.log(`Service listening on port ${PORT}`)
})
