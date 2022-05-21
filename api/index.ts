import {config} from "dotenv";
config();

import express from "express";
import {MeteoController} from "./controllers";


async function startServer(): Promise<void> {
    const app = express();

    const meteoController = new MeteoController();
    app.use('/meteo', meteoController.buildRoutes())

    app.listen(process.env.PORT, function() {
        console.log("Server listening on port " + process.env.PORT);
    });

}

startServer().catch(console.error);