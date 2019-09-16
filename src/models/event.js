const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    description:{
        type: String,
        required:true ,
        trim: true
    } ,
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Costumer'
    },
    seats:{
        type:Number ,
        required:true,
    },
    name:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required: true
    },
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'

    }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event