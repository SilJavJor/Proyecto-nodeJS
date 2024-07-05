/*  */

const { userService } = require("../services/indexServices.js");
const constants = require("../config/constants.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserByPk = async (req, res) => {
    try {
        const user = await userService.getUserByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: `${constants.USER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: `${constants.USER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserByMail = async (req, res) => {
    try {
        const user = await userService.getUserByMail(req.params.email);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: `${constants.USER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserByName = async (req, res) => {
    try {
        const users = await userService.getUserByName(req.params.name);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserByLastName = async (req, res) => {
    try {
        const users = await userService.getUserByLastName(req.params.lastName);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        if (deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404).json({ error: `${constants.USER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: `${constants.USER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserByPk,
    getUserById,
    getUserByMail,
    getUserByName,
    getUserByLastName,
    createUser,
    deleteUser,
    updateUser,
};
