const mongoose = require('mongoose'); 
const express = require('express'); 

const exerciseSchema = new mongoose.Schema({
    exerciseName:{type:String, required:true}, 
    duration:{type:String, required:true}, 
    description:{type:String, required: false}, 
    photo:{type:String, required:false}, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
}, 
{timestamps:true}); 

module.exports = mongoose.model('Exercise', exerciseSchema);