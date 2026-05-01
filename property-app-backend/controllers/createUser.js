const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};