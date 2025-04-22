const express = require('express');
const router = express.Router();
const taskController = require('../controllers/Task.controller.js');

// Define routes
router.get('/posts', taskController.getAllTasks);
router.get('/posts/:id', taskController.getTaskById);
router.post('/posts', taskController.createTask);
router.put('/posts/:id', taskController.updateTask);
router.delete('/posts/:id', taskController.deleteTask);

module.exports = router;