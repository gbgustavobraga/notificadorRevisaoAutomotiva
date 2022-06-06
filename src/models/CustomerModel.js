
const mongoose = require('mongoose');
require('dotenv').config();
const validator = require('validator');
const nodemailer = require('nodemailer');
const CustomerSchema = new mongoose.Schema({
    email: {type: String, required: true}
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

class Customer {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null
    }
    async register() {
        this.valid();
        if(this.errors.length > 0) return;

    }
    valid() {
        if(validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
    }
    

    async sendEmail() {
        
        try {
            
            await console.log(this.email)
            const transport = nodemailer.createTransport({
                host: 'smtp.hostinger.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASS
                }
            })
            
            transport.sendMail({
                from: 'contato@autocenterbraga.online',
                to: 'contato@autocenterbraga.online',
                subject: 'NICE',
                html: 'ddddd',
                text: 'test v1'
            }).then(() => console.log('nice'))
        } catch(e) {
            console.log(e);
        }
        
    }
}

module.exports = Customer;