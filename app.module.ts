import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PatientController} from "./src/controllers/patient.controller";
import { HttpModule } from "@nestjs/axios";
import {MaterialController} from "./src/controllers/material.controller";
import {FavourController} from "./src/controllers/favour.controller";

@Module({
    imports: [
        // ConfigModule.forRoot({
        //     isGlobal: true,
        //     envFilePath: '.env',
        // }),
        // JwtModule.register({
        //     secret:
        //         'DRMT4Js64SGaHnEOTOry9dfZijDwJBaBue-_lM0zPkRQYD4c6IHdn3yrJwH8gtdM7hRn1K-ryl-b-bUUo1ETnQ',
        //     signOptions: {
        //         expiresIn: '60m',
        //     },
        // }),
        MikroOrmModule.forRoot(),
        HttpModule,
        // RedisModule.forRoot({
        //   config: {
        //     url: 'redis://localhost:6379', // Your Redis URL
        //   },
        // }),
    ],
    controllers: [
        PatientController,
        MaterialController,
        FavourController
    ],
    // providers: [GoogleStrategy, UserSubscriber, FacebookStrategy,TiktokStrategy],
})
export class AppModule {}
