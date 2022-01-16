const express = require('express');
const connectDB = require('./Config/db.js');
const cors = require('cors');
const app = express();

app.use(cors());

connectDB();

app.use(express.json({extended : false}));

app.use('/api/animals', require('./Routers/API/AnimalRouter.js'));
app.use('/api/bodyparts', require('./Routers/API/BodyPartsRouter.js'));

app.get('/', (request, response) => response.send('API Running'));

const port = process.env.port || 8200;
app.listen(port, () => console.log(`Express Server Started on Port ${port}`));