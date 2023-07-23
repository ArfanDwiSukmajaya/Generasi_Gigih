require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        const dbURI = process.env.DATABASE_URL;
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Terhubung ke database");
    } catch (error) {
        console.error("Kesalahan koneksi ke database:", error);
    }
};
connectToDatabase();

const routes = require("./routes/routes");
const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended : true
    })
)

app.use('/api', routes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
