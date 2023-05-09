import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone_number: {
        type: String
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
},
{
    timestamp: true
})

const Contact = mongoose.models.contact || mongoose.model('Contact', contactSchema);

export default Contact;