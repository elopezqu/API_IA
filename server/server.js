// server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const clientRoutes = require('./routes/clientRoutes');
const earningRoutes = require('./routes/earningRoutes');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/tickets', ticketRoutes);
app.use('/earnings', earningRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
