import {Entity, PrimaryKey, Property, OneToMany, Collection} from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';
import { Favour} from "./favour.entity";

@Entity()
export class Patient {
    @PrimaryKey({type:"uuid"})
    id: string ;

    @Property()
    name: string;

    @Property()
    phone: string;

    @OneToMany(() => Favour, favour => favour.patient)
    favours = new Collection<Favour>(this);


    constructor(name: string,phone: string) {
        this.id = uuid();
        this.name = name;
        this.phone = phone;
    }
}
