
const express = require('express');
const {getAllExercises, getExerciseById, getExerciseByUserId, createExercise, updateExercise, deleteExercise} = require('../controllers/exerciseController'); 
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router(); 

router.get('/', authMiddleware, getAllExercises);
router.get('/:id', authMiddleware, getExerciseById); 
router.get('/user/:userId', authMiddleware, getExerciseByUserId); 
router.post('/', authMiddleware, createExercise); 
router.put('/:id', authMiddleware, updateExercise); 
router.delete('/:id', authMiddleware, deleteExercise);

module.exports = router;