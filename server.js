const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
const config = require('./server/config');

mongoose.connect(config.MONGO_URI, {useMongoClient: true});
const monDb = mongoose.connection;

monDb.on('error', () => {
    console.error('MongoDB Connection Error. Please make sure that', config.MONGO_URI, 'is running.');
});

monDb.once('open', function callback() {
    console.info('Connected to MongoDB:', config.MONGO_URI);
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

const port = process.env.PORT || '8083';
app.set('port', port);

app.use(require('./server/api')(app));

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});