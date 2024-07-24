import { Request, Response } from 'express';
import {
    Controller,
    Post,
    Body,
    Get,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Favour } from '../entities/favour.entity';
import {MikroORM} from "@mikro-orm/core";

@Controller('/favour')
export class FavourController {

    constructor(private readonly em: EntityManager,orm: MikroORM) {

    }

    @Get('/favours')
    async getFavours(req: Request, res: Response) {
        const favourRepository = this.em.getRepository(Favour);
        const favours = await favourRepository.findAll();

        return favours;
    }

    @Post('/create-favour')
    async createFavour(@Body(){title,price}, req: Request, res: Response) {

        const favour=this.em.create(Favour)
    }
}
