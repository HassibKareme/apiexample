const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({ //Hier de velden van mongo
    name: {
        type: String
    },
    location: {
        type: String
    },
    address: { 
        type: String
    },
    image: {
        type: String
    }
}, {
    collection: 'campus' //mongodb schema collectie
});

module.exports = mongoose.model('Campus', CampusSchema)