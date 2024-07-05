/*  */

const scoreService = require("../services/scoreService");
const constants = require("../config/constants.js");

const getAllScores = async (req, res) => {
    try {
        const scores = await scoreService.getAllScores();
        res.json(scores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getScoreByPk = async (req, res) => {
    try {
        const score = await scoreService.getScoreByPk(req.params.id);
        if (score) {
            res.json(score);
        } else {
            res.status(404).json({ error: `${constants.SCORE_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getScoreById = async (req, res) => {
    try {
        const score = await scoreService.getScoreById(req.params.id);
        if (score) {
            res.json(score);
        } else {
            res.status(404).json({ error: `${constants.SCORE_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createScore = async (req, res) => {
    try {
        const newScore = await scoreService.createScore(req.body);
        res.status(201).json(newScore);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteScore = async (req, res) => {
    try {
        const deletedScore = await scoreService.deleteScore(req.params.id);
        if (deletedScore) {
            res.json(deletedScore);
        } else {
            res.status(404).json({ error: `${constants.SCORE_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateScore = async (req, res) => {
    try {
        const updatedScore = await scoreService.updateScore(req.params.id, req.body);
        if (updatedScore) {
            res.json(updatedScore);
        } else {
            res.status(404).json({ error: `${constants.SCORE_NOT_FOUNDS}` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllScores,
    getScoreByPk,
    getScoreById,
    createScore,
    deleteScore,
    updateScore,
};
