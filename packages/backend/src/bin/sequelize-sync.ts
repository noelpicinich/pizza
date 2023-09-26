import sequelize from '../models';

(async () => {
    // console.log(sequelize.models)
    await sequelize.sync();
})();
