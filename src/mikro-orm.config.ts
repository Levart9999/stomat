import { defineConfig } from '@mikro-orm/postgresql';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';
import { SeedManager } from '@mikro-orm/seeder';


const config = defineConfig({
    entities: ['./dist/entities'], // путь к скомпилированным сущностям
    entitiesTs: ['./src/entities'], // путь к исходным сущностям
    dbName: 'postgres',
    user: 'postgres',
    password: 'ion11',
    debug: true,
    highlighter: new SqlHighlighter(),
    allowGlobalContext: true,
    metadataProvider: TsMorphMetadataProvider,
    migrations: {
        generator: TSMigrationGenerator,
        path: './dist/migrations', // путь к скомпилированным миграциям
        pathTs: './src/migrations', // путь к миграциям в TypeScript
    },

    seeder: {
        path: './src/database',
        defaultSeeder: 'DatabaseSeeder',
        emit: 'ts',
        glob: '!(*.d).{js,ts}',
    },
    // registerRequestContext: false,
    extensions: [
        Migrator,
        // EntityGenerator,
        SeedManager,
    ],



});

export default config;
