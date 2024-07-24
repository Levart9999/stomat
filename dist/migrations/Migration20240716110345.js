"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20240716110345 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20240716110345 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "favour_materials" ("favour_id" v4 not null, "material_id" uuid not null, constraint "favour_materials_pkey" primary key ("favour_id", "material_id"));');
            this.addSql('create table "spent_per_visit" ("id" v4 not null, constraint "spent_per_visit_pkey" primary key ("id"));');
            this.addSql('alter table "favour_materials" add constraint "favour_materials_favour_id_foreign" foreign key ("favour_id") references "favour" ("id") on update cascade on delete cascade;');
            this.addSql('alter table "favour_materials" add constraint "favour_materials_material_id_foreign" foreign key ("material_id") references "material" ("id") on update cascade on delete cascade;');
            this.addSql('alter table "patient" alter column "id" drop default;');
            this.addSql('alter table "patient" alter column "id" type uuid using ("id"::text::uuid);');
            this.addSql('alter table "patient" alter column "phone" type varchar(255) using ("phone"::varchar(255));');
            this.addSql('alter table "patient" alter column "phone" set not null;');
            this.addSql('alter table "favour" add column "patient_id" uuid not null;');
            this.addSql('alter table "favour" alter column "id" type v4 using ("id"::v4);');
            this.addSql('alter table "favour" alter column "price" type varchar(255) using ("price"::varchar(255));');
            this.addSql('alter table "favour" alter column "price" set not null;');
            this.addSql('alter table "favour" add constraint "favour_patient_id_foreign" foreign key ("patient_id") references "patient" ("id") on update cascade;');
        });
    }
    down() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('drop table if exists "favour_materials" cascade;');
            this.addSql('drop table if exists "spent_per_visit" cascade;');
            this.addSql('alter table "favour" drop constraint "favour_patient_id_foreign";');
            this.addSql('alter table "patient" alter column "id" type text using ("id"::text);');
            this.addSql('alter table "favour" drop column "patient_id";');
            this.addSql('alter table "favour" alter column "id" type varchar(255) using ("id"::varchar(255));');
            this.addSql('alter table "favour" alter column "price" type varchar(255) using ("price"::varchar(255));');
            this.addSql('alter table "favour" alter column "price" drop not null;');
            this.addSql('alter table "patient" alter column "id" type varchar(255) using ("id"::varchar(255));');
            this.addSql('alter table "patient" alter column "phone" type varchar(255) using ("phone"::varchar(255));');
            this.addSql('alter table "patient" alter column "phone" drop not null;');
        });
    }
}
exports.Migration20240716110345 = Migration20240716110345;
//# sourceMappingURL=Migration20240716110345.js.map