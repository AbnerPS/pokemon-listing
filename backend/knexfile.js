require('dotenv').config();

module.exports = {
    development: {
        client: process.env.DB_CLIENT,
        connection: {
            filename: './src/database/db.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    },
  
    test: {
        client: process.env.DB_CLIENT,
        connection: {
            filename: './src/database/test.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    },
  
    production: {
        client: process.env.DB_CLIENT,
        connection: {
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
  
};