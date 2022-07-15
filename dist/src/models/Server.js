import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import router from '../routes/geolocalroutes.js';
dotenv.config();
class Server {
    constructor() {
        //Aplicacion express
        this.app = express();
        this.geoPath = '/v1';
        this.port = process.env.PORT || '3000';
        //Middleware
        this.middlewares();
        //Rutas
        this.routes();
    }
    middlewares() {
        //CORS
        this.app.use(cors());
        //Parseo de body
        this.app.use(express.json());
    }
    ;
    routes() {
        this.app.use(this.geoPath, router);
    }
    ;
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor funcionando en el puerto:', this.port);
        });
    }
    getApp() {
        return this.app;
    }
}
export default Server;
//# sourceMappingURL=Server.js.map