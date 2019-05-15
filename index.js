const db = require('./Database/database');

db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error' + err))
