const Event = require('../models/event')
const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/event' , async (req,res) =>{
    event = new Event ({
        description:'Test',
        owner:'Guga'
    })
    try{
    await event.save()
    res.status(200).send(event)
    }
    catch (e) {
        res.status(400).send(event)
    }
})

module.exports = router