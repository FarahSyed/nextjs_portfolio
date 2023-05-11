import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    phone_num: String,
    email: String,
    subject: String,
    message: String,
},
{
    timestamp: true
})

const Contact = mongoose.models.contact || mongoose.model('contact', contactSchema);

export default Contact;