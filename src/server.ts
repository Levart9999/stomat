// import 'reflect-metadata';
// import express from 'express';
// import { MikroORM } from '@mikro-orm/core';
// import mikroOrmConfig from './mikro-orm.config';
// import { Patient } from './entities/patient.entity';
// import {Favour} from './entities/favour.entity'
// import {Material} from "./entities/material.entity";
// import { setupRoutes } from './routes/patientRoutes';

import { NestFactory } from '@nestjs/core';
import {AppModule} from "../app.module";
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
        optionsSuccessStatus: 204,
        credentials: true,
    });

    app.use(bodyParser.json());
    app.use('/', express.static(join(__dirname, '/')));


    await app.listen(3000);
}
bootstrap();



// const main = async () => {
//     const orm = await MikroORM.init(mikroOrmConfig);
//     const app = express();
//     const PORT = process.env.PORT || 3000;
//
//     app.use(express.json());
//     app.get('/', (req, res) => {
//         res.send('Hello, world!');
//     });
//
//     // Пример маршрута для создания пользователя
//     app.post('/patients', async (req, res) => {
//         const patient = orm.em.create(Patient, req.body);
//         await orm.em.persistAndFlush(patient);
//         res.json(patient);
//     });
//
//     // Пример маршрута для получения пользователей
//     app.get('/patient', async (req, res) => {
//         const id = "730fdb55-c7f8-424c-a6da-046834566a55"
//         const patient = await orm.em.find(Patient, {id:id});
//         res.json(patient);
//
//     });
//
//     app.get('/patients', async (req, res) => {
//         const patients = await orm.em.findAll(Patient, {});
//         res.json(patients);
//     })
//
//     app.listen(PORT, () => {
//         console.log(`Server is running on http://localhost:${PORT}`);
//     });
//
//     app.post('/favours', async (req, res) => {
//         const favour = orm.em.create(Favour, req.body);
//         await orm.em.persistAndFlush(favour);
//         res.json(favour);
//     });
//
//     app.post('/materials', async (req, res) => {
//         const material = orm.em.create(Material, req.body);
//         await orm.em.persistAndFlush(material);
//         res.json(material);
//     });
//
//
// };


// main().catch(err => {
//     console.error(err);
// });
