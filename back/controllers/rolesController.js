/*  */

const rolService = require("../services/rolService");
const constants = require("../config/constants.js");

const getAllRoles = async (req, res) => {
    try {
        const rol = await rolService.getAllRoles();
        res.json(rol);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRolByPk = async (req, res) => {
    try {
        const rol = await rolService.getRolByPk(req.params.id);
        if (rol) {
            res.json(rol);
        } else {
            res.status(404).json({ error: `${constants.ROL_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRolById = async (req, res) => {
    try {
        const rol = await rolService.getRolById(req.params.id);
        if (rol) {
            res.json(rol);
        } else {
            res.status(404).json({ error: `${constants.ROL_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createRol = async (req, res) => {
    try {
        const newRol = await rolService.createRol(req.body);
        res.status(201).json(newRol);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteRol = async (req, res) => {
    try {
        const deletedRol = await rolService.deleteRol(req.params.id);
        if (deletedRol) {
            res.json(deletedRol);
        } else {
            res.status(404).json({ error: `${constants.ROL_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateRol = async (req, res) => {
    try {
        const updatedRol = await rolService.updateRol(req.params.id, req.body);
        if (updatedRol) {
            res.json(updatedRol);
        } else {
            res.status(404).json({ error: `${constants.ROL_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllRoles,
    getRolByPk,
    getRolById,
    createRol,
    deleteRol,
    updateRol,
};
