import express, {Request, Response, Router} from "express";
import {CacheService, MeteoService} from "../services";

export class MeteoController {

    async getMeteo(req: Request, res: Response){
        try{
            if(CacheService.getInstance().get(req.params.city_name)){
                res.json(CacheService.getInstance().get(req.params.city_name));
                res.status(200).end();
            }else{
                const geoPos = await MeteoService.getInstance().getGeoPos(req.params.city_name);
                if (geoPos) {
                    const weather = await MeteoService.getInstance().getWeather(geoPos.lat, geoPos.lon);
                    CacheService.getInstance().set(req.params.city_name, weather);
                    res.json(weather);
                    res.status(200).end();
                }else{
                    res.status(400).end();
                }
            }
        } catch (err) {
            res.status(400).end();
        }
    }

    buildRoutes(): Router {
        const router = express.Router();
        router.get('/:city_name', this.getMeteo.bind(this));
        return router;
    }
}