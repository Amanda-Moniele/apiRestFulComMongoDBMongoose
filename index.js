const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("dotenv").config();
const personRoutes = require("./routes/personRoutes");

app.use(express.urlencoded({extend: true}));
app.use(express.json());
app.use('/person', personRoutes);

const password = process.env.MONGODB_PASSWORD;

mongoose.connect(`mongodb+srv://amandamonielesilva02_db_user:${password}@cluster0.lbshyfw.mongodb.net/?appName=Cluster0`)
.then(() => {
    console.log("conectamos ao mongoDB")
    app.listen(3000);
})
.catch((err) => {
    console.log(err)
})
