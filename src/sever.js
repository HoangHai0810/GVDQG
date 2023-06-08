import express from "express";
import bodyParser from "body-parser";
import ViewEngine from "./config/ViewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

ViewEngine(app);
initWebRoutes(app);

connectDB();

<<<<<<< HEAD
let port = process.env.PORT || 8800;
=======
let port = process.env.PORT || 5050;
>>>>>>> 4150543b70a16127ef3735e39017ac33e15b20d5

app.listen(port, () => {
    //callback
    console.log("Backend")
})
