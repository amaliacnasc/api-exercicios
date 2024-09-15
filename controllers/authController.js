const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/jwt');

exports.register = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = new User({ userName, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: '1h' }); 
    res.json({ token , id: user._id  }
     );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Sign recebe 3 parametros, o 1 é as informações que quero que retorne no token (id)
// o 2 é a key pra desencriptografar 
// o 3 é em quanto tempo esse token vai expirar 

// na resposta ele vai devolver o valor do token 
