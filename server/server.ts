import express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app: express.Application = express();

const viewsDirectoryPath = path.join(__dirname, '../views');

app.use(express.static(viewsDirectoryPath));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for

// Create a new express app instance
app.get('/', function (req, res) {
    res.sendFile('index.html');
});
app.post('/ears', cors(), function (req, res, next) {
    const answer = {answer: `Sono il server e so che hai detto: ${req.body.query}`}
    //console.log(JSON.stringify(req));
    res.send(answer);
});
app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});
