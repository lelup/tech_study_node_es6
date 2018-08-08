//Do the same as todos.js
import express from "express";
const router = express.Router();
//Models
import Todo from '../models/Todo';
import Task from '../models/Task';
import { isNumeric, isEmpty, isBoolean } from 'validator';
//Insert
router.post('/', async (req, res) => {	
    try {
        let { todoid, name, isfinished } = req.body;
        //Validate
        if (!isNumeric(todoid) || isEmpty(name) || !isBoolean(isfinished)) {
            res.json({
                result: 'failed',
                data: {},
                message: `todoid must be a number, name must not be empty, isfinished must be boolean`
            });
            return;
        }
        let newTask = await Task.create({
            todoid,
            name,
            isfinished
        }, {
                fields: ["todoid", "name", "isfinished"]
            });
        if (newTask) {
            res.json({
                result: 'ok',
                data: newTask,
                message: "insert a new Task successfully"
            });
        } else {
            res.json({
                result: 'failed',
                data: {},
                message: `Insert a new Task failed.`
            });
        }
    } catch(error) {
        res.json({
            result: 'failed',
            data: {},
            message: `Insert a new Task failed. Error: ${error}`
        });
    }
});
//Update
router.put('/:id', async (req, res) => {
    let { id } = req.params;
    if (!isNumeric(id)) {
        res.json({
            result: 'failed',
            data: {},
            message: `id must be a number`
        });
        return;
    }
    let { todoid, name, isfinished } = req.body;
    try {
        let tasks = await Task.findAll({
            attributes: ['id', "todoid", "name", "isfinished"],
            where: {
                id
            }
        });
        if (tasks.length > 0) {
            tasks.forEach(async (task) => {
                await task.update({
                    todoid: todoid ? todoid : task.todoid,
                    name: name ? name : task.name,
                    isfinished: isfinished ? isfinished : task.isfinished,

                });
            });
            res.json({
                result: 'ok',
                data: tasks,
                message: "update a Task successfully"
            });
        } else {
            res.json({
                result: 'failed',
                data: {},
                message: "Cannot find Task to update"
            });
        }
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `Cannot update a Task. Error: ${error}`
        });
    }
});
//Delete
router.delete('/:id', async (req, res) => {
    let { id } = req.params;
    if (!isNumeric(id)) {
        res.json({
            result: 'failed',
            data: {},
            message: `id must be a number`
        });
        return;
    }
    try {
        let numberOfDeletedRows = await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            result: 'ok',
            message: "Delete a Task successfully",
            count: numberOfDeletedRows
        });
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `Delete a Task failed. Error: ${error}`
        });
    }
});
//Query
router.get('/', async (req, res) => {
    try {
        let tasks = await Task.findAll({
            attributes: ['id', "todoid", "name", "isfinished"],
            order: [
                ['name', 'ASC']
            ],
        });
        res.json({
            result: 'ok',
            data: tasks,
            message: "Query list of Tasks successfully"
        });
    } catch (error) {
        res.json({
            result: 'failed',
            data: [],
            message: `Query list of Tasks failed. Error: ${error}`
        });
    }
});
//Query by Id:
router.get('/:id', async (req, res) => {
    let { id } = req.params;
    if (!isNumeric(id)) {
        res.json({
            result: 'failed',
            data: {},
            message: `id must be a number`
        });
        return;
    }
    try {
        let tasks = await Task.findAll({
            attributes: ["id", "todoid", "name", "isfinished"],
            where: {
                id
            }
        });
        if (tasks.length > 0) {
            res.json({
                result: 'ok',
                data: tasks[0],
                message: "query list of Tasks successfully"
            });
        } else {
            res.json({
                result: 'failed',
                data: {},
                message: "Cannot find Task to show"
            });
        }
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `query list of Tasks(by id) failed. Error: ${error}`
        });
    }
});
//Query by todoid
router.get('/todoid/:todoid', async (req, res) => {
    let { todoid } = req.params;
    if (!isNumeric(todoid)) {
        res.json({
            result: 'failed',
            data: {},
            message: `todoid must be a number`
        });
        return;
    }
    try {
        let tasks = await Task.findAll({
            attributes: ["id", "todoid", "name", "isfinished"],
            where: {
                todoid
            }
        });
        res.json({
            result: 'ok',
            data: tasks,
            message: "query list of Tasks successfully"
        });
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `query list of Tasks(by id) failed. Error: ${error}`
        });
    }
});
export default router;