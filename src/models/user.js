const mongoose  = require('mongoose')
const Event = require('./event')
const bcrypt = require('bcryptjs')
const validator = require('validator')



const userSchema = new mongoose.Schema({
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
    quantity:{
        type:Number,
    }

})

costumerSchema.virtual('Event', {
    ref: 'Event',
    localField: '_id',
    foreignField: 'booked'
})



costumerSchema.pre('save', async function (next) {
    const costumer = this

    if(costumer.isModified('password')) {
        costumer.password = await bcrypt.hash(costumer.password, 8)
    }
    next()
})

const User = mongoose.model('User' , userSchema)

module.exports = User