require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const userRouter = require('./routes/userRouter')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/coba', router);
app.use('/user', userRouter)

app.listen(process.env.SERVER_PORT, () => {console.log(`Tugas Selesai ${process.env.SERVER_PORT}`)});
