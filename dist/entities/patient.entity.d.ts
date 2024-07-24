import { Collection } from '@mikro-orm/core';
import { Favour } from "./favour.entity";
export declare class Patient {
    id: string;
    name: string;
    phone: string;
    favours: Collection<Favour, object>;
    constructor(name: string, phone: string);
}
