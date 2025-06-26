require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Tambahkan ini
const router = require('./routes/api.js');

const APP_PORT = process.env.APP_PORT || 3000;
const APP_HOST = process.env.APP_HOST || 'localhost';
const app = express();

app.use(cors()); // Tambahkan ini
app.use(express.json());
app.use('/api', router);
app.use('/uploads', express.static('uploads'));

if (!APP_PORT) {
  console.error('APP_PORT is not defined in .env');
  process.exit(1);
}

app.listen(APP_PORT, () => {
  console.log(`Server is running on: http://${APP_HOST}:${APP_PORT}`);
});