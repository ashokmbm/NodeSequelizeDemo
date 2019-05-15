const Sequelize = require('sequelize');
const db = require('./../Database/database');

const File = db.define('FILE_DATA', {
    file_name: {
        type: Sequelize.STRING
    },
    file_content: {
        type: Sequelize.STRING
    }
})

module.exports = File;
