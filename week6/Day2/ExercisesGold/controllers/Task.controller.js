const Task = require('../models/todo.module.js');

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the task' });
    }
};

exports.createTask = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newTask = await Task.create({ title, content });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create the task' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { title, content } = req.body;
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'task not found' });
        }
        task.title = title || task.title;
        task.content = content || task.content;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update the task' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: 'task not found' });
        }
        await task.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the task' });
    }
};