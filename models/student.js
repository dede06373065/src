const {Schema,model} = require('mongoose');
const Joi = require('joi');//做数据验证的一个包；

const schema = new Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
        minlength:2
    },
    lastName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        validate:{
            validator: ()=>{
                // const validation = Joi.string().email.validate(email);
                // const {error} = validation;
                // if(error){
                //     return false;
                // } else {
                //     return true
                // };
                return !Joi.string.email.validate(email).error;
            },
            msg: 'Invalid email format.'
        }
    }
},{
    timestamps: true,
    id: true
})

module.exports = model('Student',schema)
