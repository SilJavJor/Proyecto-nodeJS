/*  */

const { Score } = require("../models/indexModels");

const getAllScores = async () => {
    try {
        return await Score.findAll();
    } catch (error) {
        throw new Error(`Error al obtener los scores: ${error.message}`);
    }
};

const getScoreByPk = async (id) => {
    try {
        return await Score.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el score por ID: ${error.message}`);
    }
};

const getScoreById = async (id) => {
    try {
        return await Score.findByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el score por ID: ${error.message}`);
    }
};

const createNewScore = async (data) => {
    try {
        return await Score.create(data);
    } catch (error) {
        throw new Error(`Error al crear el score: ${error.message}`);
    }
};

const deleteScore = async (id) => {
    try {
        const score = await Score.findByPk(id);
        if (score) {
            await score.destroy();
            return score;
        }
        return null;
    } catch (error) {
        throw new Error(`Error al eliminar el score: ${error.message}`);
    }
};

const updateScore = async (id, data) => {
    try {
        const score = await Score.findByPk(id);
        if (score) {
            return await score.update(data);
        }
        return null;
    } catch (error) {
        throw new Error(`Error al actualizar el score: ${error.message}`);
    }
};

module.exports = {
    getAllScores,
    getScoreByPk,
    getScoreById,
    createNewScore,
    deleteScore,
    updateScore,
};
