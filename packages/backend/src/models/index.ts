import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  models: [__dirname + '**.model.ts'], // or [Player, Team],
});