import { Collection } from '@mikro-orm/core';
import { Patient } from "./patient.entity";
import { Material } from "./material.entity";
export declare class Favour {
    id: string;
    title: string;
    price: string;
    patient: Patient;
    materials: Collection<Material, object>;
    constructor(title: string, price: string, patient: Patient);
}
