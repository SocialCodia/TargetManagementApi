const mongoose = require('mongoose');

const dbConnection = () =>
{    
    mongoose.connect('mongodb+srv://socialcodia:%40Umair4Firdos%40@socialcodia.j8mwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(()=>console.log('Database Connection Successfull'))
    .catch(err=>console.log('Failed To Connect With Database, \nReason : '+err.message))
}

module.exports = dbConnection;