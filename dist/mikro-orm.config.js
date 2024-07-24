"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@mikro-orm/postgresql");
const sql_highlighter_1 = require("@mikro-orm/sql-highlighter");
const reflection_1 = require("@mikro-orm/reflection");
const migrations_1 = require("@mikro-orm/migrations");
const seeder_1 = require("@mikro-orm/seeder");
const config = (0, postgresql_1.defineConfig)({
    entities: ['./dist/entities'],
    entitiesTs: ['./src/entities'],
    dbName: 'postgres',
    user: 'postgres',
    password: 'ion11',
    debug: true,
    highlighter: new sql_highlighter_1.SqlHighlighter(),
    allowGlobalContext: true,
    metadataProvider: reflection_1.TsMorphMetadataProvider,
    migrations: {
        generator: migrations_1.TSMigrationGenerator,
        path: './dist/migrations',
        pathTs: './src/migrations',
    },
    seeder: {
        path: './src/database',
        defaultSeeder: 'DatabaseSeeder',
        emit: 'ts',
        glob: '!(*.d).{js,ts}',
    },
    extensions: [
        migrations_1.Migrator,
        seeder_1.SeedManager,
    ],
});
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map