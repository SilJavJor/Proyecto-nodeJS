/*  */

const { gameProvider } = require("../providers/indexProviders");

const getAllGames = async () => {
    try {
        return await gameProvider.getAllGames();
    } catch (error) {
        //throw new Error(`Error al obtener los games: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const getGameByPk = async (id) => {
    try {
        return await gameProvider.getGameByPk(id);
    } catch (error) {
        //throw new Error(`Error al obtener el game por ID: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const getGameById = async (id) => {
    try {
        return await gameProvider.getGameById(id);
    } catch (error) {
        //throw new Error(`Error al obtener el game por ID: ${error.message}`);
        throw new Error(`${error.message}`);
    }
};

const createGame = async (data) => {
    try {
        return await gameProvider.createNewGame(data);
    } catch (error) {
        throw new Error(`Error al crear el game: ${error.message}`);
    }
};

const deleteGame = async (id) => {
    try {
        return await gameProvider.deleteGame(id);
    } catch (error) {
        throw new Error(`Error al eliminar el game: ${error.message}`);
    }
};

const updateGame = async (id, data) => {
    try {
        return await gameProvider.updateGame(id, data);
    } catch (error) {
        throw new Error(`Error al actualizar el game: ${error.message}`);
    }
};

module.exports = {
    getAllGames,
    getGameByPk,
    getGameById,
    createGame,
    deleteGame,
    updateGame,
};
