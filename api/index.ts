import {config} from "dotenv";
config();

import express from "express";
import {MeteoController} from "./controllers";


async function startServer(): Promise<void> {
    const app = express();

    const meteoController = new MeteoController();
    app.use('/meteo', function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    }, meteoController.buildRoutes())

    app.listen(process.env.PORT, function() {
        console.log("Server listening on port " + process.env.PORT);
    });

}

startServer().catch(console.error);