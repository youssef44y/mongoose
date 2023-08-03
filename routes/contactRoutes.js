const express = require('express')
const Contact = require('../models/contactSchema')
const router = express.Router()


//@ DESCRIPTIO : POST METHOD
router.post('/users',async(req, res) => {
    try{
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(200).json({msg:"success",newContact})
    }catch(err) {res.status(500).json({msg:"errror",err})}
})


//@ DESCRIPTIO : GET METHOD
router.get('/users',async(req, res) => {
    try{
        const newContact = await Contact.find()
        res.status(200).json({msg:"success",newContact})
    }catch(err) {res.status(500).json({msg:"errror",err})}
})

//@ DESCRIPTIO : UPDATE METHOD
router.put('/users/:id',async(req, res) => {
    try{
        const newContact = await Contact.findByIdAndUpdate({_id:req.params.id},{...req.body})
        if (!newContact) return req.status(404).json({msg:"contact not found"})
        res.status(200).json({msg:"contact updated",newContact: {...newContact._doc, ...req.body}})
    }catch(err) {res.status(500).json({msg: err.message})}
})

//@ DESCRIPTIO : DELETE METHOD
router.delete('/users/:id',async(req, res) => {
    try{
        const newContact = await Contact.findByIdAndDelete(req.params.id)
        if (!newContact) return req.status(404).json({msg:"contact deleted"})
        res.status(200).json({msg:"contact deleted",newContact})
    }catch(err) {res.status(500).json({msg:"errror",err})}
})

module.exports = router