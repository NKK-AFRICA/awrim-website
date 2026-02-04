#!/usr/bin/env node

/**
 * AWRIM Database Migration Runner
 * Run database migrations for the AWRIM website
 *
 * Usage:
 *   node migrations/migrate.js [migration_file]
 *   node migrations/migrate.js 001_initial_schema.sql
 *   node migrations/migrate.js all
 */

import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'awrim_db',
    multipleStatements: true // Allow multiple SQL statements
};

async function runMigration(migrationPath) {
    console.log(`Running migration: ${migrationPath}`);

    try {
        // Read migration file
        const sqlContent = fs.readFileSync(migrationPath, 'utf8');

        // Create database connection
        const connection = await mysql.createConnection(dbConfig);

        // Split SQL into individual statements and execute them
        const statements = sqlContent.split(';').filter(stmt => stmt.trim().length > 0);

        for (const statement of statements) {
            if (statement.trim()) {
                console.log(`Executing: ${statement.trim().substring(0, 50)}...`);
                await connection.execute(statement.trim());
            }
        }

        await connection.end();
        console.log(`✅ Migration completed successfully: ${path.basename(migrationPath)}`);

    } catch (error) {
        console.error(`❌ Migration failed: ${error.message}`);
        process.exit(1);
    }
}

async function runAllMigrations() {
    console.log('Running all migrations...');

    const migrationsDir = path.dirname(__filename);
    const migrationFiles = fs.readdirSync(migrationsDir)
        .filter(file => file.endsWith('.sql'))
        .sort(); // Sort to run in order

    for (const file of migrationFiles) {
        const migrationPath = path.join(migrationsDir, file);
        await runMigration(migrationPath);
    }

    console.log('🎉 All migrations completed!');
}

async function main() {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage:');
        console.log('  node migrations/migrate.js all                    # Run all migrations');
        console.log('  node migrations/migrate.js 001_initial_schema.sql # Run specific migration');
        process.exit(1);
    }

    const command = args[0];

    if (command === 'all') {
        await runAllMigrations();
    } else {
        // Check if it's a specific migration file
        const migrationPath = path.isAbsolute(command)
            ? command
            : path.join(__dirname, command);

        if (!fs.existsSync(migrationPath)) {
            console.error(`Migration file not found: ${migrationPath}`);
            process.exit(1);
        }

        await runMigration(migrationPath);
    }
}

main().catch(error => {
    console.error('Migration runner failed:', error);
    process.exit(1);
});