import { Request, Response } from 'express';
import {
    Controller,
    Post,
    Body,
    Get,
    Delete,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Patient } from '../entities/patient.entity';
import {MikroORM} from "@mikro-orm/core";
import {Param} from "routing-controllers";

@Controller('/patient')
export class PatientController {

     constructor(private readonly em: EntityManager,orm: MikroORM) {

    }

    @Get('/patients')
    async getPatients(req: Request, res: Response) {
        const patientRepository = this.em.getRepository(Patient);
        const patients = await patientRepository.findAll();

        return patients;
    }

    @Post('/create-patient')
    async createPatient(@Body(){name,phone } , req: Request, res: Response) {
        const patient = this.em.create(Patient, {
            name: name,
            phone:phone
        });
        await this.em.persistAndFlush(patient);
        return patient;

         // const patientRepository = this.em.getRepository(Patient);
        // const newPatient = patientRepository.create(patientData);
        // await orm.em.persistAndFlush(Patient);
        // return res.status(201).json(newPatient);
    }
    @Delete('/patients/:id')
    async deletePatient(@Param('id') id: string, req: Request, res: Response) {
        const patientRepository = this.em.getRepository(Patient);
        const patient = await patientRepository.findOne({ id});

        await this.em.removeAndFlush(patient);
        return ({ message: 'Patient deleted successfully' });
    }


}

