const mongoose = require('mongoose'); 
const express = require('express'); 
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    userName:{type:String, required:true}, 
    password:{type:String, required:true}
}, 
{timestamps:true}); 


userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };
module.exports = mongoose.model('User', userSchema);