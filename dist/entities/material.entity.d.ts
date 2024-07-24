import { Collection } from '@mikro-orm/core';
import { Favour } from "./favour.entity";
export declare class Material {
    id: string;
    title: string;
    quantity: string;
    favours: Collection<Favour, object>;
    constructor(title: string, quantity: string);
}
