
const express = require('express');
const {getAllExercises, getExerciseById , getExercisesByUserId, createExercise, updateExercise, deleteExercise} = require('../controllers/exerciseController'); 
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllExercises);
router.get('/:id', authMiddleware, getExerciseById); 
router.get('/user/:id',authMiddleware, getExercisesByUserId);
router.post('/', authMiddleware, createExercise); 
router.put('/:id', authMiddleware, updateExercise); 
router.delete('/:id', authMiddleware, deleteExercise);

module.exports = router;