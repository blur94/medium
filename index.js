const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const routes = require('./routes/route_index');

const URL = 'mongodb://localhost:27017/medium';
const PORT = 5000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('open', () => console.log("Mongodb Connected"));
mongoose.connection.on('error', (e) => console.log(e));

//for json record
app.use(express.json());
//for form record..
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "*"
    })
)

app.use(routes);

app.get("/", function (req, res) {
    res.send({ "msg": "Our Api record" });
});


app.listen(PORT);
console.log("Running on http://localhost:" + PORT);