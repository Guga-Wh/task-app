const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const Event = require('./event')

const costumerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },

})
costumerSchema.virtual('Event', {
    ref: 'Event',
    localField: '_id',
    foreignField: 'owner'
})


costumerSchema.pre('save', async function (next) {
    const costumer = this

    if(costumer.isModified('password')) {
        costumer.password = await bcrypt.hash(costumer.password, 8)
    }
    next()
})
const Costumer = mongoose.model('Costumer', costumerSchema)
module.exports = Costumer