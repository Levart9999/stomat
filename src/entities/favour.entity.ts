import {Entity, PrimaryKey, Property,ManyToOne,ManyToMany,Collection} from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';
import {Patient} from "./patient.entity";
import {Material} from "./material.entity";

@Entity()
export class Favour {
    @PrimaryKey()
    id: string ;

    @Property()
    title: string;

    @Property()
    price: string;

    @ManyToOne(() => Patient, { nullable: false })
    patient: Patient;

    @ManyToMany(() => Material, material => material.favours, { owner: true })
    materials = new Collection<Material>(this);

    constructor(title: string,price: string,patient: Patient) {
        this.title = title;
        this.id = uuid();
        this.price=price;
        this.patient = patient;
    }
}
