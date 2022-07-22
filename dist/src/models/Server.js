"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var geolocalroutes_js_1 = __importDefault(require("../routes/geolocalroutes.js"));
dotenv_1.default.config();
var Server = /** @class */ (function () {
    function Server() {
        //Aplicacion express
        this.app = (0, express_1.default)();
        this.geoPath = '/v1';
        this.port = process.env.PORT || '8000';
        //Middleware
        this.middlewares();
        //Rutas
        this.routes();
    }
    Server.prototype.middlewares = function () {
        //CORS
        this.app.use((0, cors_1.default)());
        //Parseo de body
        this.app.use(express_1.default.json());
    };
    ;
    Server.prototype.routes = function () {
        this.app.use(this.geoPath, geolocalroutes_js_1.default);
    };
    ;
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Servidor funcionando en el puerto:', _this.port);
        });
    };
    Server.prototype.getApp = function () {
        return this.app;
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=Server.js.map