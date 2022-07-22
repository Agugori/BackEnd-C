"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var index_js_1 = require("../index.js");
describe('BackEnd NodeJS', function () {
    it('GET/v1 - responds with json', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET/v1 - status cargando', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
            status: 'Cargando...'
        }, done);
    });
    it('GET/v1/location - find a city ', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/location - responds with json', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(function (res) {
            if (!res.body.ip.city) {
                return done('No existe el campo city');
            }
            done();
        })
            .catch(function (err) { return done(err); });
    });
    it('GET /v1/current - responds with json', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1/current')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/current/city - responds with json', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1/current/rosario')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/forecast - responds with json', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1/forecast')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('GET /v1/forecast/city - responds with json', function (done) {
        (0, supertest_1.default)(index_js_1.app)
            .get('/v1/forecast/rosario')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
//# sourceMappingURL=index.spec.js.map