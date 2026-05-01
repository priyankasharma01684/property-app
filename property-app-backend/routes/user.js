const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Create user
router.post('/create', userController.createUser);

// Update user
router.put('/update/:id', userController.updateUser);

// Delete user
router.delete('/delete/:id', userController.deleteUser);

// View user
router.get('/view/:id', userController.getUserById);

module.exports = router;