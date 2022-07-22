"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var geoLocation_js_1 = require("../controllers/geoLocation.js");
var getCity_js_1 = require("../controllers/getCity.js");
exports.router = (0, express_1.Router)();
exports.router.get('/', function (req, res) {
    res.status(200).json({ status: 'Cargando...' });
});
exports.router.get('/location', getCity_js_1.getCity);
exports.router.get('/current/:city?', geoLocation_js_1.getCurrentLocation);
exports.router.get('/forecast/:city?', geoLocation_js_1.getForecastCurrentCity);
exports.default = exports.router;
//# sourceMappingURL=geolocalroutes.js.map