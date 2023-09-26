import { SequelizeOptions } from 'sequelize-typescript';
import checkEnvironment from '../lib/utils/checkEnvironment';

checkEnvironment(['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PORT', 'DB_PASSWORD']);

const defaultConfig: SequelizeOptions = {
    dialect: 'postgres',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
};

export default defaultConfig;
