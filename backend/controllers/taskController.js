const Task = require("../models/Task");

// GET all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET one task
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// CREATE task
exports.createTask = async (req, res) => {

    try {

        const { title, description, status } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required"
            });
        }

        const task = await Task.create({
            title,
            description,
            status
        });

        res.status(201).json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// UPDATE task

exports.updateTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json(task);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// DELETE task

exports.deleteTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({
            message: "Task deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};