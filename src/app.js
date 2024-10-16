const express = require("express");
const mongoose = require("mongoose");
// require("dotenv").config();
const cors = require("cors");

const indexRouter = require('./routes/index');
const subsRoute = require("./routes/subscriptions");

// settings
const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.use(
    cors({
        origin: '*',
        credentials: true,
        optionSuccessStatus: 200,
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
)
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
})

app.use('/', indexRouter);
app.use('/api', subsRoute);


// mongodb connection
mongoose
    .connect("mongodb+srv://userMA:accesoDB@clustermt.ble66gx.mongodb.net/AIS?retryWrites=true&w=majority&appName=ClusterMT")
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));