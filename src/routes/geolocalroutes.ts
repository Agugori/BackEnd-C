import { Router } from "express";
import { getLocation, 
         getCurrentLocation, 
         getForecastCurrentCity 
} from "../controllers/geoLocation.js";
export const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({estado: 'Cargando...'})
})
router.get('/location', getLocation )
router.get('/location/:city?', getCurrentLocation )
router.get('/location/:city?', getForecastCurrentCity )

export default router;