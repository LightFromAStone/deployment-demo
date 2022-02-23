const express = require('express');
const path = require('path'); // directory path. Used for heroku
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../indes.html')));

const SERVER_PORT = process.env.PORT || 4005; // heroku has their own env file that we are calling on here

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));

