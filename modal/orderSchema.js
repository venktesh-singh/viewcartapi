const mongooose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const orderSchema = new mongooose.Schema({
    amount: {
        type: Number,
    },
    shipname: {
        type: String,
    },
    shipaddress: {
        type: String,
    },
    shipaddress2: {
        type: String,
    },
    email: {
        type: String,
        index: {
            unique: true
        },
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    mobile: {
        type: Number,
        // required:true
    },
    house_no:{
        type: String,
    },
    territary:{
        type: String,
    },
    city:{
        type: String,
    },
    state:{
        type: String,
    },
    country:{
        type: String,
    },
    pin_code:{
        type: Number,  
    },
    landmark:{
        type: String,  
    },
    fax:{
        type: String,  
    },
    shipping:{
        type: String,  
    },
    tax:{
        type: String,  
    },
    order_date:{
        type: Date,
    },
    order_shipped:{
        type: Boolean,
    },
    order_tracking_no:{
        type: String,  
    },
    payment_method:{
        type:Number,
    },
    action:{
        type:String
    },
    status:
    {    
        type: Boolean   
    },

}, {
    timestamps: true
})


const Order = mongooose.model('ORDER', orderSchema);

module.exports = Order;