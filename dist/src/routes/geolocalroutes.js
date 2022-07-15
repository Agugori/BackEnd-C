import { Router } from "express";
import { getLocation, getCurrentLocation, getForecastCurrentCity } from "../controllers/geoLocation.js";
export const router = Router();
router.get('/', (req, res) => {
    res.status(200).json({ status: 'Cargando...' });
});
router.get('/location', getLocation);
router.get('/current/:city?', getCurrentLocation);
router.get('/forecast/:city?', getForecastCurrentCity);
export default router;
//# sourceMappingURL=geolocalroutes.js.map