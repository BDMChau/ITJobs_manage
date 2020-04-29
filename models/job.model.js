const sequelize = require('sequelize');
const db = require('../database/database');

const job = db.define('job', /*Schema*/{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequelize.STRING
    },
    technology: {
        type: sequelize.STRING
    },
    budget: {
        type: sequelize.STRING
    },
    description: {
        type: sequelize.TEXT
    },
    email: {
        type: sequelize.STRING
    },
});

db.sync();

// job.destroy({
//     where: {},
//     truncate: true,
//     cascade: false,
//     restartIdentity: true
// })


module.exports = job;