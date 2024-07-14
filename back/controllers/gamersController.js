/*  */

const gamerService = require("../services/gamerService");
const messages = require("../config/messagesGamers.js");

const getAllGamers = async (req, res) => {
    try {
        const gamers = await gamerService.getAllGamers();

        if (gamers) {
            res.json(gamers);
        } else {
            res.status(404).json({ error: `${messages.GAMERS_NOT_FOUNDS}` });
        }
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
            res.status(404).json({ error: `${messages.GAMER_NOT_FOUND}` });
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
            res.status(404).json({ error: `${messages.GAMER_NOT_FOUND}` });
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
            res.status(404).json({ error: `${messages.GAMER_NOT_FOUND}` });
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
            res.status(404).json({ error: `${messages.GAMER_NOT_FOUND}` });
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
