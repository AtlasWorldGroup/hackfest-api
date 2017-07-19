const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

const port = process.env.PORT || '8083';
app.set('port', port);

app.use(require('./server/api')(app));

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});