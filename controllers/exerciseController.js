const Exercise = require('../models/Exercise');
const User = require('../models/User');

exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find().populate('user');
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id).populate('user');
    if (!exercise) {
      return res.status(404).json({ message: 'Exercício não encontrado' });
    }
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createExercise = async (req, res) => {
  console.log(req.body);
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    return res.status(201).json(exercise);
 
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exercise) {
      return res.status(404).json({ message: 'Exercício não encontrado' });
    }
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteExercise = async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json({ message: 'Exercício excluído' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getExercisesByUserId = async (req, res) => {
  try {
    const { id } = req.params;  
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const exercises = await Exercise.find({ user: id });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
