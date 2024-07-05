/*  */

const { scoreProvider } = require("../providers/indexProviders");

const getAllScores = async () => {
    try {
        return await scoreProvider.getAllScores();
    } catch (error) {
        throw new Error(`Error al obtener los scores: ${error.message}`);
    }
};

const getScoreByPk = async (id) => {
    try {
        return await scoreProvider.getScoreByPk(id);
    } catch (error) {
        throw new Error(`Error al obtener el score por ID: ${error.message}`);
    }
};

const getScoreById = async (id) => {
    try {
        return await scoreProvider.getScoreById(id);
    } catch (error) {
        throw new Error(`Error al obtener el score por ID: ${error.message}`);
    }
};

const createScore = async (data) => {
    try {
        return await scoreProvider.createNewScore(data);
    } catch (error) {
        throw new Error(`Error al crear el score: ${error.message}`);
    }
};

const deleteScore = async (id) => {
    try {
        return await scoreProvider.deleteScore(id);
    } catch (error) {
        throw new Error(`Error al eliminar el score: ${error.message}`);
    }
};

const updateScore = async (id, data) => {
    try {
        return await scoreProvider.updateScore(id, data);
    } catch (error) {
        throw new Error(`Error al actualizar el score: ${error.message}`);
    }
};

module.exports = {
    getAllScores,
    getScoreByPk,
    //getScoreById,
    createScore,
    deleteScore,
    updateScore,
};
