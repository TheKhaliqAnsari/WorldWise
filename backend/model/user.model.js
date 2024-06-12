const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type : String,
        require: true,
        unique:true
    },
    password:{
        type: String,
        min: [8, "Password must have at-least 8 characters"]
    },
    image: {
        type: String,
        default: ''
    }
})

// To encrypt password :-
userSchema.pre('save', async function(next){
    // const hashedPassword = await bcrypt.hash()
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})


// To check if email is already taken:
userSchema.statics.isEmailTaken = async function(email){
    const emailTaken = await this.findOne({email})
    return emailTaken;
}

// To compare login password:
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model( "user", userSchema);
module.exports = User;