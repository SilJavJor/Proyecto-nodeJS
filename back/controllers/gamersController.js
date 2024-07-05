/*  */

const gamerService = require("../services/gamerService");
const constants = require("../config/constants.js");

const getAllGamers = async (req, res) => {
    try {
        const gamers = await gamerService.getAllGamers();
        res.json(gamers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGamerByPk = async (req, res) => {
    try {
        const gamer = await gamerService.getGamerByPk(req.params.id);
        if (gamer) {
            res.json(gamer);
        } else {
            res.status(404).json({ error: `${constants.GAMER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGamerById = async (req, res) => {
    try {
        const gamer = await gamerService.getGamerById(req.params.id);
        if (gamer) {
            res.json(gamer);
        } else {
            res.status(404).json({ error: `${constants.GAMER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createGamer = async (req, res) => {
    try {
        const newGamer = await gamerService.createGamer(req.body);
        res.status(201).json(newGamer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteGamer = async (req, res) => {
    try {
        const deletedGamer = await gamerService.deleteGamer(req.params.id);
        if (deletedGamer) {
            res.json(deletedGamer);
        } else {
            res.status(404).json({ error: `${constants.GAMER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateGamer = async (req, res) => {
    try {
        const updatedGamer = await gamerService.updateGamer(req.params.id, req.body);
        if (updatedGamer) {
            res.json(updatedGamer);
        } else {
            res.status(404).json({ error: `${constants.GAMER_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllGamers,
    getGamerByPk,
    getGamerById,
    createGamer,
    deleteGamer,
    updateGamer,
};
