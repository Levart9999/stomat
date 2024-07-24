import {Entity, PrimaryKey, Property,ManyToMany,Collection} from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';
import {Favour} from "./favour.entity";

@Entity()
export class Material {
    @PrimaryKey({type: "uuid"})
    id: string;

    @Property()
    title: string;

    @Property()
    quantity: string;

    @ManyToMany(() => Favour, favour => favour.materials)
    favours = new Collection<Favour>(this);

    constructor(title: string, quantity: string) {
        this.id = uuid();
        this.title = title;
        this.quantity = quantity;
    }
}
