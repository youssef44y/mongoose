const mongoose =require('mongoose');

const contactSchema = mongoose.Schema(
    {
        name:String,
        email: {type:String,required:true},
        passeword:{type:String,required:true},
        adress: {
            city: String,
            code: Number
        }
    }
)

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact