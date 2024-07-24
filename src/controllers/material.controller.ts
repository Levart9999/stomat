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
import { Material } from '../entities/material.entity';
import {MikroORM} from "@mikro-orm/core";

@Controller('/material')
export class MaterialController {

    constructor(private readonly em: EntityManager,orm: MikroORM) {

    }

    @Get('/materials')
    async getMaterials(req: Request, res: Response) {
        const materialRepository = this.em.getRepository(Material);
        const materials = await materialRepository.findAll();

        return materials;
    }

    @Post('/create-material')
    async createMaterial(@Body(){title, quantity}, req: Request, res: Response) {
        const material =  this.em.create(Material,{
            title: title,
            quantity: quantity,
        });
         await this.em.persistAndFlush(material);
         return material;

    }
}
