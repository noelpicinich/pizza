import { Sequelize } from 'sequelize-typescript';
import path from 'path';
import sequelizeConfig from '@config/sequelize';

const sequelize = new Sequelize({
    ...sequelizeConfig,
    models: [path.resolve(__dirname, '*.model.ts')]
});

export default sequelize;
