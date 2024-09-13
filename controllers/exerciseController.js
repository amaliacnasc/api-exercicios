const express = require('express'); 
const exercise = require('../models/Exercise');
const User = require('../models/User'); 

// get

exports.getAllExercises = async(req,res)=>{
    try{
        const exercicios = await exercise.find();
        res.status(500).json({message:exercicios});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

// Get 

exports.getExerciseById = async (req, res) =>{
    try{
        const exercicio = await exercise.findById(req.params.id);
        if (!exercicio) {
            return res.status(404).json({ message: 'Exercicio não encontrado' });
          }
          res.json(exercicio);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
}

exports.getExerciseByUserId = async(req,res) =>{
    try{
        const {userId} = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
          }
      const exercicios = await exercise.find({userId}); 
      res.status(200).json(exercicios);
    }catch (error) {
        res.status(500).json({ error: error.message });
      }
}
// POST 

 exports.createExercise = async(req,res)=>{
    try{
        const exercicio = new exercise(req.body); 
        await exercicio.save(); 
        res.status(201).json(exercicio);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}; 

exports.updateExercise = async(req,res) =>{
    try{
        const exercicio = await exercise.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        if(!exercicio){
            return res.status(404).json({message: 'Exercício não encontrado '});
        }
        res.json(exercicio); 
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.deleteExercise= async(req, res)=>{
    try{
        const exercicioDeletado = await exercise.findByIdAndDelete(req.params.id); 
        res.json({message: `Exercício$ ${exercicioDeletado} excluído`});  
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

