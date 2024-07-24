import { Migration } from '@mikro-orm/migrations';

export class Migration20240716110345 extends Migration {

  async up(): Promise<void> {
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
  }

  async down(): Promise<void> {
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
  }

}
