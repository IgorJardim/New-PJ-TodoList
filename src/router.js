const express = require('express');
const tasksController = require('src/controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksmiddlewares');

const router = express.Router();
router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validaFieldTitle, tasksController.createdTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validaFieldTitle, tasksMiddleware.validaFieldStatus, tasksController.updateTask);

module.exports = router;